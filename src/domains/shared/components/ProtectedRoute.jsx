import { Navigate } from "react-router-dom";
import { useAuth } from "@/auth/context/AuthContext";

// This component ensures that only authenticated users can access certain routes
export default function ProtectedRoute({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
}
