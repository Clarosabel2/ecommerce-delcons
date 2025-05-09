import Category from "../models/Category";
import Product from "../models/Product";
import Rating from "../models/Rating";

export const mockProducts: Product[] = [
    new Product(
        1,
        "MacBook Air",
        123,
        "",
        new Category(1, "Electronic"),
        "https://http2.mlstatic.com/D_NQ_NP_2X_801112-MLA46516512347_062021-T.webp",
        new Rating(2, 2)
    ),
    new Product(
        2,
        "Tablet",
        1230,
        "",
        new Category(1, "Electronic"),
        "https://i.blogs.es/6dbb45/captura-de-pantalla-2024-12-11-a-las-8.41.12/650_1200.png",
        new Rating(2, 2)
    ),
    new Product(
        3,
        "IPhone 16 Pro Max",
        3423,
        "",
        new Category(1, "Electronic"),
        "https://dcdn-us.mitiendanube.com/stores/001/097/819/products/iphone_16_ultramarine_pdp_image_position_1__en-in_6c707cad-991a-4cce-826c-15a71885ee62-81e0147d8e9e16643e17298216142643-640-0.png",
        new Rating(2, 2)
    ),
];