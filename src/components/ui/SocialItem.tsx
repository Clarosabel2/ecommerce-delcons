import React from "react";

interface SocialProps {
    children: React.ReactNode;
}

export default function SocialItem({ children }: SocialProps) {
    return (
        <a
            href="#"
            className="flex items-center gap-1 hover:text-white"
        >
            {children}
        </a>
    );
}
