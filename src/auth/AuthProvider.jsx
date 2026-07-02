/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useCallback, useContext, useMemo, useState } from "react";
import { api, axiosSecure } from "../api/axios";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => localStorage.getItem("adminToken"));
  const [user, setUser] = useState(null);

  const login = useCallback(async (email, password) => {
    const { data } = await api.post("/auth/login", { email, password });
    localStorage.setItem("adminToken", data.token);
    setToken(data.token);
    setUser(data.user);
    return data.user;
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem("adminToken");
    setToken(null);
    setUser(null);
  }, []);

  const verify = useCallback(async () => {
    const { data } = await axiosSecure.get("/auth/me");
    setUser(data);
    return data;
  }, []);

  const value = useMemo(
    () => ({ token, user, login, logout, verify, isAuthenticated: Boolean(token) }),
    [token, user, login, logout, verify]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
