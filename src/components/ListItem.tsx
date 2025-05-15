import React from "react";
import AnimatedLink from "./AnimatedLink";

interface ListItemProps {
    items: Array<any>;
}

export default function ListItem({ items }: ListItemProps) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <AnimatedLink>
                        <input type="checkbox" name="" id="" /> {item.name}
                    </AnimatedLink>
                </li>
            ))}
        </ul>
    );
}
