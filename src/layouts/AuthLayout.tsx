import React, { ReactNode } from "react";

interface AuthLayoutProps {
    children: ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-700 to-slate-900">
            {children}
        </div>
    );
}
