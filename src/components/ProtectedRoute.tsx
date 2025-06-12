import { useAuth, useUser } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";
import CircleProgessPage from "./ui/CircleProgessPage";
import { RolUser } from "../enums/RolUser";


interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole?: RolUser;
}


const ProtectedRoute = ({ children, requiredRole }: ProtectedRouteProps) => {
  const { user, isLoaded } = useUser();
  const location = useLocation();

  if (!isLoaded) {
    return <CircleProgessPage />;
  }

  if (!user) {
    return (
      <Navigate
        to="/auth/login"
        state={{ from: location.pathname }}
        replace
      />
    );
  }

  const userRole = user.publicMetadata?.role;

  if (requiredRole && userRole !== requiredRole) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
