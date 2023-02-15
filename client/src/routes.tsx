import { useRoutes } from "react-router-dom";
import Loader from "./components/Loader";
import Home from "./pages/Home";

export default function Router() {

    return useRoutes([
        {
            path:"/",
            element: <Home />
        }
    ])
};