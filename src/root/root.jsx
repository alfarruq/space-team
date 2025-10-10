import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import AuthLayout from "../layouts/AuthLayout";

import Home from "../pages/Home";
import Tests from "../pages/Tests";
import Course from "../pages/Courses";
import Blog from "../pages/Blog";
import AboutUs from "../pages/AboutUs";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { index: true, element: <Home /> }, // "/" uchun
            { path: "tests", element: <Tests /> },
            { path: "courses", element: <Course /> },
            { path: "blog", element: <Blog /> },
            { path: "aboutus", element: <AboutUs /> },
        ],
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            { path: "login", element: <Login /> },
            { path: "signup", element: <Signup /> },
        ],
    },
]);

function Root() {
    return <RouterProvider router={router} />;
}

export default Root;
