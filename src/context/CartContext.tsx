import React, {
    Children,
    createContext,
    useContext,
    useState,
    ReactNode,
    JSX,
} from "react";

import Cart, { Item } from "../models/Cart";
import Product from "../models/Product";

interface CartContextProps {
    cart: Cart;
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

    const addItem = (item: Item) => {
        const newCart = new Cart([...cart.items]);
        newCart.addItem(item);
        setCart(newCart);
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
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart }}>
            {children}
        </CartContext.Provider>
    );
}
