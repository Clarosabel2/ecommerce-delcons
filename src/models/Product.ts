import Category from "./Category";
import Rating from "./Rating";

interface Dimensions {
    width: number;
    height: number;
    depth: number;
}

interface Review {
    rating: number;
    comment: string;
    date: string;
    reviewerName: string;
    reviewerEmail: string;
}

interface Meta {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
}

export default class Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: Category;
    image: string;
    rating: Rating;
    brand?: string;
    sku?: string;
    discountPercentage?: number;
    stock?: number;
    tags?: string[];
    weight?: number;
    dimensions?: Dimensions;
    warrantyInformation?: string;
    shippingInformation?: string;
    availabilityStatus?: string;
    returnPolicy?: string;
    minimumOrderQuantity?: number;
    reviews?: Review[];
    meta?: Meta;
    images?: string[];
    thumbnail?: string;
    
    constructor(
        id: number,
        name: string,
        price: number,
        description: string,
        category: Category,
        image: string,
        rating: Rating,
        brand?: string,
        sku?: string,
        discountPercentage?: number,
        stock?: number,
        tags?: string[],
        weight?: number,
        dimensions?: Dimensions,
        warrantyInformation?: string,
        shippingInformation?: string,
        availabilityStatus?: string,
        returnPolicy?: string,
        minimumOrderQuantity?: number,
        reviews?: Review[],
        meta?: Meta,
        images?: string[],
        thumbnail?: string
    ) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
        this.category = category;
        this.image = image;
        this.rating = rating;
        this.brand = brand;
        this.sku = sku;
        this.discountPercentage = discountPercentage;
        this.stock = stock;
        this.tags = tags;
        this.weight = weight;
        this.dimensions = dimensions;
        this.warrantyInformation = warrantyInformation;
        this.shippingInformation = shippingInformation;
        this.availabilityStatus = availabilityStatus;
        this.returnPolicy = returnPolicy;
        this.minimumOrderQuantity = minimumOrderQuantity;
        this.reviews = reviews;
        this.meta = meta;
        this.images = images;
        this.thumbnail = thumbnail;
    }
}
