import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("ROLE");

  // 1. Not logged in
  if (!token) {
    return <Navigate to="/login" />;
  }

  // 2. Wrong role
  if (role !== allowedRole) {
    return <Navigate to="/unauthorized" />;
  }

  // 3. Allowed
  return children;
};

export default ProtectedRoute;