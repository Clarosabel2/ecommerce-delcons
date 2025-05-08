import React, { useEffect, useState } from "react";
import { GiClothes } from "react-icons/gi";
import { getCategories } from "../service/StoreApi";
import Category from "../models/Category";
import AnimatedLink from "./AnimatedLink";

export default function CategoryProduct() {
    
    const [categories, setCategories] = useState<Array<Category>>([]);
    const [category, setCategory] = useState<string>();

    const handleCategoryChange = (categoryName: string) => {
        setCategory(categoryName);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error("Error al cargar categorías:", error);
            }
        };
        fetchCategories();
    }, []);

    return (
        <ul className="space-y-1">
            {categories.map((c) => (
                <li key={c.id} className="flex items-center gap-2">
                    <AnimatedLink>{c.name}</AnimatedLink>
                </li>
            ))}
        </ul>
    );
}
