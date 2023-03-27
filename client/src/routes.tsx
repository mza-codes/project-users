import { useRoutes } from "react-router-dom";

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RegisterSuccess from "./pages/RegisterSuccess";
import AdminDashboard from "./pages/AdminDashboard";
import { IsLoggedOut, IsAdmin, IsUserActive } from "./middlewares";
import LoadingPage from "./pages/LoadingPage";
import ProfileCompletion from "./pages/ProfileCompletion";
import UserDashboard from "./pages/UserDashboard";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";

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
            path: "/complete-profile",
            element: (
                <IsUserActive>
                    <ProfileCompletion />
                </IsUserActive>
            ),
        },
        {
            path: "/dashboard",
            element: (
                <IsUserActive>
                    <UserDashboard />
                </IsUserActive>
            ),
        },
        {
            path: "/profile",
            element: (
                <IsUserActive>
                    <Profile />
                </IsUserActive>
            ),
        },
        {
            path: "/logout",
            element: (
                <IsUserActive>
                    <Logout />
                </IsUserActive>
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
