import { useRoutes } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RegisterSuccess from "./pages/RegisterSuccess";
import AdminDashboard from "./pages/AdminDashboard";

export default function Routes() {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/signup",
            element: <Auth signup />,
        },
        {
            path: "/login",
            element: <Auth login />,
        },
        {
            path: "/register-success",
            element: <RegisterSuccess />,
        },
        {
            path: "/admin/login",
            element: <Auth admin />,
        },
        {
            path: "/admin/signup",
            element: <Auth adminSignup />,
        },
        {
            path: "/admin/dashboard",
            element: <AdminDashboard />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);
}
