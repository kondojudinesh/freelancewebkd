import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({
  children,
  role,
}: {
  children: JSX.Element;
  role?: string;
}) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/login" />;

  // If role is passed, check against user metadata
  if (role && user.user_metadata.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
