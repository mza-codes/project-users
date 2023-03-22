import { useRoutes } from "react-router-dom"
import Auth from "./pages/Auth"
import Home from "./pages/Home"

type Props = {}

export default function Routes({ }: Props) {
    return useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/signup",
            element: <Auth signup />
        },
        {
            path: "/login",
            element: <Auth login />
        }
    ])
};