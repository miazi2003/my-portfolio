import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { useAuth } from "./AuthProvider";

const ProtectedAdminRoute = () => {
  const { token, verify, logout } = useAuth();
  const [status, setStatus] = useState("checking");

  useEffect(() => {
    if (!token) {
      setStatus("guest");
      return;
    }

    verify()
      .then(() => setStatus("allowed"))
      .catch(() => {
        logout();
        setStatus("guest");
      });
  }, [token, verify, logout]);

  if (status === "checking") {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (status === "guest") return <Navigate to="/adminYeasin" replace />;

  return <Outlet />;
};

export default ProtectedAdminRoute;
