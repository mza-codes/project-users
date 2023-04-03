import { useRoutes } from "react-router-dom";
import { IsLoggedOut, IsAdmin, IsUserActive } from "./middlewares";
import { lazy } from "react";

const Auth = lazy(() => import("./pages/Auth"));
const Home = lazy(() => import("./pages/Home"));
const NotFound = lazy(() => import("./pages/NotFound"));
const RegisterSuccess = lazy(() => import("./pages/RegisterSuccess"));
const AdminDashboard = lazy(() => import("./pages/AdminDashboard"));
const LoadingPage = lazy(() => import("./pages/LoadingPage"));
const ProfileCompletion = lazy(() => import("./pages/ProfileCompletion"));
const UserDashboard = lazy(() => import("./pages/UserDashboard"));
const Logout = lazy(() => import("./pages/Logout"));
const Profile = lazy(() => import("./pages/Profile"));

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
