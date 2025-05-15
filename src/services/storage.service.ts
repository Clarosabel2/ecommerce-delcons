import Cart, { Item } from "../models/Cart";

const CART_STORAGE_KEY = 'shopping-cart';

export const StorageService = {
    saveCart: (cart: Cart): void => {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        } catch (error) {
            console.error('Error al guardar el carrito:', error);
        }
    },

    loadCart: (): Cart | null => {
        try {
            const savedCart = localStorage.getItem(CART_STORAGE_KEY);
            if (!savedCart) return null;

            const parsedCart = JSON.parse(savedCart);
            
            const items = parsedCart.items.map((item: any) => {
                const newItem = new Item(item.quantity, item.product);
                newItem.id = item.id;
                newItem.subtotal = item.subtotal;
                return newItem;
            });
            
            const newCart = new Cart(items);
            newCart.amount = parsedCart.amount;
            return newCart;
        } catch (error) {
            console.error('Error al cargar el carrito:', error);
            return null;
        }
    },

    clearCart: (): void => {
        try {
            localStorage.removeItem(CART_STORAGE_KEY);
        } catch (error) {
            console.error('Error al limpiar el carrito:', error);
        }
    }
}; 