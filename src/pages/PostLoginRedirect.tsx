import { useEffect } from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import CircleProgessPage from "../components/ui/CircleProgessPage";

export default function PostLoginRedirect() {
    const { user, isLoaded } = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoaded || !user) return;

        const role = user.publicMetadata.role;

        if (role === "admin") {
            navigate("/dashboard");
        } else {
            navigate("/");
        }
    }, [isLoaded, user, navigate]);

    return <CircleProgessPage />;
}
