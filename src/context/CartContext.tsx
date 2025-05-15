import React, {
    createContext,
    useContext,
    useState,
    ReactNode,
    JSX,
    useRef,
    useEffect,
} from "react";

import Cart, { Item } from "../models/Cart";
import { StorageService } from "../services/storage.service";

interface CartContextProps {
    cart: Cart;
    isAddItem: boolean;
    hasItems: boolean;
    addItem: (item: Item) => void;
    removeItem: (itemId: number) => void;
    clearCart: () => void;
}

interface CartProviderProps {
    children: ReactNode;
}

export const CartContext = createContext<CartContextProps | undefined>(
    undefined
);

export default function CartProvider({
    children,
}: CartProviderProps): JSX.Element {
    // Inicializar el carrito desde el servicio de almacenamiento
    const [cart, setCart] = useState(() => {
        return StorageService.loadCart() || new Cart([]);
    });

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const [isAddItem, setFlag] = useState(false);
    const [hasItems, setHasItems] = useState(false);

    // Guardar en storage cada vez que el carrito cambie
    useEffect(() => {
        StorageService.saveCart(cart);
        setHasItems(cart.items.length > 0);
    }, [cart]);

    const addItem = (item: Item) => {
        setFlag(true);

        const existingItem = cart.items.find(
            (i) => i.product.id === item.product.id
        );

        if (existingItem) {
            const newCart = new Cart([...cart.items]);
            const newItem = newCart.items.find(
                (i) => i.product.id === item.product.id
            );
            if (newItem) {
                newItem.quantity = item.quantity;
                newItem.subtotal = newItem.calculateSubtotal();
                newCart.amount = newCart.calculateAmount();
                setCart(newCart);
            }
        } else {
            const newCart = new Cart([...cart.items]);
            item.id = newCart.items.length + 1;
            newCart.addItem(item);
            setCart(newCart);
        }

        timeoutRef.current = setTimeout(() => {
            setFlag(false);
        }, 900);
    };

    const removeItem = (productId: number) => {
        const newCart = new Cart([...cart.items]);
        newCart.removeItem(productId);
        setCart(newCart);
    };

    const clearCart = () => {
        setCart(new Cart([]));
        StorageService.clearCart();
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addItem,
                removeItem,
                clearCart,
                isAddItem,
                hasItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}
