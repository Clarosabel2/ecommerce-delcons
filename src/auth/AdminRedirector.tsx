import { useUser } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const AdminRedirector = () => {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!isLoaded || !user) return;

    const role = user.publicMetadata?.role;
    const isAtRoot = location.pathname === "/";

    if (role === "admin" && isAtRoot) {
      navigate("/dashboard", { replace: true });
    }
  }, [isLoaded, user, location, navigate]);

  return null;
};

export default AdminRedirector;