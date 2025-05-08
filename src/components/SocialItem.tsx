import React from "react";

interface SocialProps {
    children: React.ReactNode;
}

export default function SocialItem({ children }: SocialProps) {
    return (
        <a
            href="#"
            className="flex items-center justify-center gap-2 hover:text-white"
        >
            {children}
        </a>
    );
}
