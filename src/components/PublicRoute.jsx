import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("ROLE");

  // If user already logged in → redirect to dashboard
  if (token && role) {
    if (role === "donor") return <Navigate to="/donor" />;
    if (role === "receiver") return <Navigate to="/receiver" />;
    if (role === "volunteer") return <Navigate to="/volunteer" />;
  }

  return children;
};

export default PublicRoute;