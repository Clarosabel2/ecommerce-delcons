import { SignIn, SignUpButton } from "@clerk/clerk-react";
import React from "react";
import { useLocation } from "react-router-dom";

export default function Login() {
    const location = useLocation();
    return (
        <SignIn
            forceRedirectUrl={location.state?.from ?? "/post-login"}
            signUpUrl="/auth/register"
        ></SignIn>
    );
}
