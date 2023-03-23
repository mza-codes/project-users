import Loader from "../components/Loader";

export default function LoadingPage() {
    return (
        <section className="page gap-2 text-center">
            <h2 className="text-4xl">Loading</h2>
            <Loader color="#111" inline={0} />
        </section>
    );
}
