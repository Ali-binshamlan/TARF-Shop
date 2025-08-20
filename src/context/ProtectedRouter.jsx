import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./AuthContext";

export default function ProtectedRouter({ children }) {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div>جارٍ التحميل...</div>;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
