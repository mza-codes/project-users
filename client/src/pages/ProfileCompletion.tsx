import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";
import ExtraDetails from "../components/profile/ExtraDetails";
import useAuthService from "../services/authService";
import Loader from "../components/Loader";

export default function ProfileCompletion() {
    const loading = useAuthService((s) => s.loading);
    return (
        <section className="page gap-2">
            <h2 className="text-3xl">Complete Your Profile</h2>
            <span>We would like to know more about you!</span>

            <Link className="row center gap-2" to={"/dashboard"}>
                <span>I'll do it Later!</span>
                <BsArrowRightCircleFill />
            </Link>

            <hr className="h-1.5 min-w-[90vw] my-4 bg-slate-800" />

            <ExtraDetails />
            {loading && <Loader color="#111" />}
        </section>
    );
}
