import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <section className="page gap-3">
            <h2 className="text-5xl">404 Page Not found</h2>
            <span className="text-2xl">Perhaps You've mistyped the url ?</span>
            <div className="row gap-2 center">
                <Link
                    // @ts-ignore
                    to={-1}
                    replace={true}
                    className="btn btn-hover bg-red-600 hover:bg-red-500 text-white"
                >
                    Go Back
                </Link>
                <Link to="/" className="btn btn-hover bg-teal-600 hover:bg-teal-500 text-white">
                    Home
                </Link>
            </div>
        </section>
    );
}
