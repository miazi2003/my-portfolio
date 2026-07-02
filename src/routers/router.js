import { createBrowserRouter } from "react-router";
import MainLayOut from "../layouts/MainLayOut/MainLayOut";
import Home from "../pages/Home/Home";
import ProjectDetails from "../component/projects/ProjectDetails";
import AllProjects from "../component/projects/AllProjects";
import BlogSection from "../component/blog/BlogSection";
import BlogDetails from "../component/blog/BlogDetails";
import AdminLogin from "../admin/AdminLogin";
import ProtectedAdminRoute from "../auth/ProtectedAdminRoute";
import AdminLayout from "../admin/AdminLayout";
import DashboardHome from "../admin/DashboardHome";
import {
  BlogsAdmin,
  EducationAdmin,
  ExperienceAdmin,
  ProjectsAdmin,
  SkillsAdmin,
  SettingsAdmin,
} from "../admin/AdminContentPages";
import MessagesAdmin from "../admin/MessagesAdmin";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayOut,
    children: [
      { index: true, Component: Home },
      { path: "projects/:id", Component: ProjectDetails },
      { path: "all-projects", Component: AllProjects },
    //   { path: "blogs", Component: BlogSection },
      { path: "blogs/:id", Component: BlogDetails },
    ],
  },
  {
    path: "/adminYeasin",
    Component: AdminLogin,
  },
  {
    Component: ProtectedAdminRoute,
    children: [
      {
        path: "/adminYeasin/dashboard",
        Component: AdminLayout,
        children: [
          { index: true, Component: DashboardHome },
          { path: "skills", Component: SkillsAdmin },
          { path: "education", Component: EducationAdmin },
          { path: "experience", Component: ExperienceAdmin },
          { path: "projects", Component: ProjectsAdmin },
          { path: "blogs", Component: BlogsAdmin },
          { path: "messages", Component: MessagesAdmin },
          { path: "settings", Component: SettingsAdmin },
        ],
      },
    ],
  },
]);
