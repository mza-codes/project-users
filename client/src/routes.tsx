import { useRoutes } from "react-router-dom";
import PopulateWProps from "./components/RenderWProps";
import Home from "./pages/Home";

export default function Router() {

    return useRoutes([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/users",
            element: <PopulateWProps />
        }
    ])
};
