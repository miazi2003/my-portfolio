import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthProvider";

const AdminLogin = () => {
  const { login, token } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  if (token) return <Navigate to="/adminYeasin/dashboard" replace />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await login(email, password);
      navigate("/adminYeasin/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-zinc-900/60 border border-white/10 rounded-2xl p-8 space-y-5"
      >
        <div>
          <h1 className="text-3xl font-bold">Admin Login</h1>
          <p className="text-zinc-500 text-sm mt-2">Protected portfolio dashboard</p>
        </div>

        {error && (
          <p className="bg-red-500/10 border border-red-500/20 text-red-300 rounded-lg px-4 py-3 text-sm">
            {error}
          </p>
        )}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/40"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
          className="w-full bg-black/50 border border-white/10 rounded-lg px-4 py-3 focus:outline-none focus:border-white/40"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-white text-black font-bold py-3 rounded-lg hover:bg-zinc-200 disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </section>
  );
};

export default AdminLogin;
