import Product from "./Product";

export default class Cart {
    items: Item[];
    amount: number;

    constructor(items) {
        this.items = items;
        this.amount = this.calculateAmount();
    }

    calculateAmount(): number {
        return this.items.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0);
    }
}

export class Item {
    id: number;
    quantity: number;
    product: Product;
    subtotal: number;

    constructor(id, quantity, product) {
        this.id = id;
        this.quantity = quantity;
        this.product = product;
        this.subtotal = this.calculateSubtotal();
    }

    calculateSubtotal(): number {
        console.log("hola")
        return this.product.price * this.quantity;
    }
}
