import Product from "./Product";

export default class Cart {
    items: Item[];
    amount: number;

    constructor(items) {
        this.items = items;
        this.amount = this.calculateAmount();
    }

    addItem(item: Item): void {
        this.items.push(item);
        this.amount = this.calculateAmount();
    }
    removeItem(productId: number): void {
        this.items = this.items.filter((i) => i.product.id != productId);
        this.amount = this.calculateAmount();
    }

    calculateAmount(): number {
        return this.items.reduce(
            (total, item) => {
                const a = total + item.product.price * item.quantity;
                console.log("Total: " + a);
                return a;
            },
            0
        );
    }
}

export class Item {
    id: number;
    quantity: number;
    product: Product;
    subtotal: number;

    constructor(quantity, product) {
        this.quantity = quantity;
        this.product = product;
        this.subtotal = this.calculateSubtotal();
    }

    calculateSubtotal(): number {
        console.log("Subtotal: " + this.product.price * this.quantity);
        return this.product.price * this.quantity;
    }
}
