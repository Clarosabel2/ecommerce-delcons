import Category from "../models/Category";
import Product from "../models/Product";
import Rating from "../models/Rating";
import capitalize from "../utils/stringUtils";

const API_URL = "https://dummyjson.com/products";

// Se obtiene la lista de productos de la API
export const getAllProducts = async () => {
    const res = await fetch(API_URL);
    if (!res.ok) {
        throw new Error("Error al obtener los productos");
    }

    const data = await res.json();

    let products = [];
    products = data.products.map((p: any) => instanceProduct(p));
    return products;
};
// Se obtiene un producto por su id
export const getProductById = async (id: string): Promise<Product> => {
    const res = await fetch(`${API_URL}/${id}`);
    if (!res.ok) {
        throw new Error("Error al obtener el producto");
    }
    const data = await res.json();

    return instanceProduct(data);
};
//Se obtiene la lista de categorías de los productos
export async function getCategories() {
    const res = await fetch(API_URL + "/categories");

    if (!res.ok) {
        throw new Error("Error al obtener las categorías");
    }

    let categoriesProduct: Category[] = [];

    const data = await res.json();

    data.forEach((c, i) => {
        console.log(c);
        categoriesProduct.push(new Category(i, capitalize(c)));
    });

    return categoriesProduct;
}

export async function getProductsByCategory(
    category: Category
): Promise<Product[]> {
    const res = await fetch(API_URL + `/category/${category.name}`);

    if (!res.ok) {
        throw new Error("Error al obtener productos por categoría");
    }

    const data = await res.json();

    const products = data.map((p: any) => instanceProduct(p));

    return products;
}

function instanceProduct(obj: any): Product {
    return new Product(
        obj.id,
        obj.title,
        obj.price,
        obj.description,
        new Category(obj.id, obj.category),
        obj.images?.[0] || obj.image || obj.thumbnail,
        new Rating(obj.rating || 0, obj.stock || 0),
        obj.brand,
        obj.sku,
        obj.discountPercentage,
        obj.stock,
        obj.tags,
        obj.weight,
        obj.dimensions,
        obj.warrantyInformation,
        obj.shippingInformation,
        obj.availabilityStatus,
        obj.returnPolicy,
        obj.minimumOrderQuantity,
        obj.reviews,
        {
            createdAt: obj.meta?.createdAt,
            updatedAt: obj.meta?.updatedAt,
            barcode: obj.meta?.barcode,
            qrCode: obj.meta?.qrCode
        },
        obj.images,
        obj.thumbnail
    );
}
