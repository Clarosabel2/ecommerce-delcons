import React, { ReactNode } from "react";
import { Outlet } from "react-router-dom";


export default function AuthLayout() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-700 to-slate-900">
            <Outlet/>
        </div>
    );
}
