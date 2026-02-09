import { createBrowserRouter } from "react-router";
import MainLayOut from "../layouts/MainLayOut/MainLayOut";
import Home from "../pages/Home/Home";
import ProjectDetails from "../component/projects/ProjectDetails";
import AllProjects from "../component/projects/AllProjects";
import BlogSection from "../component/blog/BlogSection";
import BlogDetails from "../component/blog/BlogDetails";

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
]);
