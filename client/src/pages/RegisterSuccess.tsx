import { Link } from "react-router-dom";

export default function RegisterSuccess() {
    return (
        <section className="page text-center gap-3 px-3">
            <h2 className="text-4xl">Registration Completed Successfully!</h2>
            <span className="text-2xl max-w-md">
                Your Data has been recorded, Once the admin approves, You will be able to Login!
            </span>

            <span className="text-xl">
                Thanks for being a valued member! <br /> Feel free to contact us on{" "}
                <a
                    className="text-green-800 hover:text-green-700"
                    href="mailto:brand@domain.cc"
                    target="_blank"
                    rel="noreferrer"
                >
                    brand@domain.cc
                </a>
            </span>
            <Link to="/" className="btn btn-hover bg-red-500 text-white hover:bg-red-600">
                Home
            </Link>
        </section>
    );
}
