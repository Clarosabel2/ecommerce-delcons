import React, {
    Children,
    createContext,
    useContext,
    useState,
    ReactNode,
    JSX,
    useRef,
} from "react";

import Cart, { Item } from "../models/Cart";
import Product from "../models/Product";

interface CartContextProps {
    cart: Cart;
    isAddItem: boolean;
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
    const [cart, setCart] = useState(new Cart([]));

    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const [isAddItem, setFlag] = useState(false);

    const addItem = (item: Item) => {
        setFlag(true);
        const newCart = new Cart([...cart.items]);
        newCart.addItem(item);
        setCart(newCart);
        
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
    };

    return (
        <CartContext.Provider
            value={{ cart, addItem, removeItem, clearCart, isAddItem }}
        >
            {children}
        </CartContext.Provider>
    );
}
