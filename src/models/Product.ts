import Category from "./Category";
import Rating from "./Rating";

export default class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: Rating;
    constructor(id, name, price, description, category, image, rate) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rate;
    }
}
