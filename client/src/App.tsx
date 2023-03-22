import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Toaster
                position="top-center"
                reverseOrder={true}
                containerClassName="capitalize truncate"
                toastOptions={{ duration: 3600 }}
                gutter={4}
            />
            <Routes />
        </BrowserRouter>
    );
}

export default App;
