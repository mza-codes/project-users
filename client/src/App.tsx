import { Toaster } from "react-hot-toast";
import { BrowserRouter } from "react-router-dom";
import CancelButton from "./components/CancelButton";
import Router from "./routes";
import useApiStore from "./store/useApi";

function App() {
    const loading = useApiStore((s) => s.isLoading);
    return (
        <main
            className="bg-gradient-to-tr from-green-300 via-red-300 to-fuchsia-300 flex-col gap-3 
                min-h-screen w-full flex items-center justify-center text-center"
        >
            <Toaster
                position="top-center"
                reverseOrder={true}
                containerClassName="capitalize"
                toastOptions={{ duration: 3600 }}
            />
            {loading && <CancelButton />}
            <CancelButton />
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </main>
    );
}

export default App;
