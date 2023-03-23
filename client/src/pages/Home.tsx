import { Link } from "react-router-dom";

export default function Home() {
    return (
        <section className="page gap-3">
            <h2 className="text-3xl">Welcome to Homepage</h2>
            <article className="max-w-[90vw] px-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates consequuntur placeat iusto
                odit maiores? Magnam repellat repudiandae, error quod provident totam iure quis nulla, quasi
                eos veniam ab ipsa distinctio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
                unde molestias eos corporis aspernatur saepe ea similique. Commodi hic quisquam optio!
                Deserunt modi, consequatur magnam perferendis consectetur a veniam voluptatibus.
            </article>
            <div className="col center gap-2">
                {/* <Link className="bg-red-400 hover:bg-red-500 btn btn-hover" to="/signup">
                    SignUp
                </Link>
                <Link className="bg-green-400 hover:bg-green-500 btn btn-hover" to="/login">
                    LogIn
                </Link>
                <Link className="bg-cyan-400 hover:bg-cyan-500 btn btn-hover" to="/register-success">
                    Success
                </Link>
                <Link className="bg-fuchsia-400 hover:bg-fuchsia-500 btn btn-hover" to="/admin/dashboard">
                    Admin Panel
                </Link>

                <Link className="bg-lime-400 hover:bg-lime-500 btn btn-hover" to="/complete-profile">
                    Complete Profile
                </Link> */}
            </div>
        </section>
    );
}
