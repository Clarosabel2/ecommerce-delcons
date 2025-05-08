import React from "react";

interface AnimatedLinkProps {
    href?: string;
    children: React.ReactNode;
}

export default function AnimatedLink({ href, children }: AnimatedLinkProps) {
    return (
        <a
            href={href}
            className="
                        ml-2
                        relative cursor-pointer inline-block 
                        text-sm text-gray-700 
                        transition-all duration-300 
                        after:content-[''] after:absolute after:left-0 after:bottom-0 
                        after:h-[.1px] after:w-0 after:bg-gray-700 after:transition-all after:duration-300 
                        hover:after:w-full"
        >
            {children}
        </a>
    );
}
