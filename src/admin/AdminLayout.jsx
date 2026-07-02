import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { useAuth } from "../auth/AuthProvider";

const links = [
  { to: "/adminYeasin/dashboard", label: "Overview" },
  { to: "/adminYeasin/dashboard/skills", label: "Skills" },
  { to: "/adminYeasin/dashboard/education", label: "Education" },
  { to: "/adminYeasin/dashboard/experience", label: "Experience" },
  { to: "/adminYeasin/dashboard/projects", label: "Projects" },
  { to: "/adminYeasin/dashboard/blogs", label: "Blogs" },
  { to: "/adminYeasin/dashboard/messages", label: "Messages" },
  { to: "/adminYeasin/dashboard/settings", label: "Settings" },
];

const AdminLayout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/adminYeasin");
  };

  return (
    <div className="min-h-screen bg-black text-white grid lg:grid-cols-[260px_1fr]">
      <aside className="border-r border-white/10 bg-zinc-950 p-6">
        <h2 className="text-2xl font-bold mb-8">Portfolio Admin</h2>
        <nav className="space-y-2">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to.endsWith("dashboard")}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-sm transition ${
                  isActive ? "bg-white text-black font-bold" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={handleLogout}
          className="mt-8 w-full bg-zinc-900 border border-white/10 px-4 py-3 rounded-lg text-sm hover:bg-zinc-800"
        >
          Logout
        </button>
      </aside>
      <main className="p-6 lg:p-10 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
