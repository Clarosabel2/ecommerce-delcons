import React from "react";
import { Link } from "react-router-dom";

interface AnimatedLinkProps {
    href?: string;
    children: React.ReactNode;
    className?: string;
}

export default function AnimatedLink({
    href = "",
    children,
    className = "",
}: AnimatedLinkProps) {
    return (
        <Link
            to={href}
            className={`
                ml-2
                relative cursor-pointer inline-block 
                text-sm text-gray-700 
                ${className}
            `}
        >
            <span className="
                relative
                after:content-[''] 
                after:absolute 
                after:left-0 
                after:bottom-0 
                after:h-[.1px] 
                after:w-0 
                after:bg-gray-700 
                after:transition-all 
                after:duration-300
                hover:after:w-full
            ">
                {children}
            </span>
        </Link>
    );
}
