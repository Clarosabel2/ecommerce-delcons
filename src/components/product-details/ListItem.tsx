import React from "react";
import AnimatedLink from "../ui/AnimatedLink";

interface ListItemProps {
    items: Array<any>;
}

export default function ListItem({ items }: ListItemProps) {
    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <AnimatedLink>{item.name} (10)</AnimatedLink>
                </li>
            ))}
        </ul>
    );
}
