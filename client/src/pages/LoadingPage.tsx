import Loader from "../components/Loader";

export default function LoadingPage() {
    return (
        <section className="page">
            <Loader color="#111" inline={1} />
        </section>
    );
}
