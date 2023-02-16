import Loader from "./Loader";

export default function TextLoader() {
    return (
        <div className="bg-white bg-opacity-20 my-3 p-3 rounded-sm">
            <h2 className="font-semibold">Please Wait while Loading..</h2>
            <Loader color="#111" />
        </div>
    );
};
