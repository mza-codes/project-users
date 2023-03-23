import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import LoadingPage from "./pages/LoadingPage";
import Routes from "./routes";

function App() {
    return (
        <BrowserRouter>
            <Toaster
                position="top-center"
                reverseOrder={true}
                containerClassName="capitalize truncate"
                toastOptions={{ duration: 5600 }}
                gutter={4}
            />
            <Suspense fallback={<LoadingPage />}>
                <Routes />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
