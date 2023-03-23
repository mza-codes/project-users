import { useRoutes } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RegisterSuccess from "./pages/RegisterSuccess";
import AdminDashboard from "./pages/AdminDashboard";
import { IsLoggedOut, IsAdmin } from "./middlewares";
import LoadingPage from "./pages/LoadingPage";

export default function Routes() {
    return useRoutes([
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/signup",
            element: (
                <IsLoggedOut>
                    <Auth signup />
                </IsLoggedOut>
            ),
        },
        {
            path: "/login",
            element: (
                <IsLoggedOut>
                    <Auth login />
                </IsLoggedOut>
            ),
        },
        {
            path: "/register-success",
            element: (
                <IsLoggedOut>
                    <RegisterSuccess />
                </IsLoggedOut>
            ),
        },
        {
            path: "/admin/login",
            element: (
                <IsLoggedOut>
                    <Auth admin />
                </IsLoggedOut>
            ),
        },
        {
            path: "/admin/signup",
            element: (
                <IsLoggedOut>
                    <Auth adminSignup />
                </IsLoggedOut>
            ),
        },
        {
            path: "/admin/dashboard",
            element: (
                <IsAdmin>
                    <AdminDashboard />
                </IsAdmin>
            ),
        },
        {
            path: "/loading",
            element: <LoadingPage />,
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]);
}
