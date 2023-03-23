import { Link } from "react-router-dom";
import { BsArrowRightCircleFill } from "react-icons/bs";
import ExtraDetails from "../components/profile/ExtraDetails";

export default function ProfileCompletion() {
    return (
        <section className="page gap-2">
            <h2 className="text-3xl">Complete Your Profile</h2>
            <span>We would like to know more about you!</span>

            <Link className="row center gap-2" to={"/dashboard"}>
                <span>I'll do it Later!</span>
                <BsArrowRightCircleFill />
            </Link>
            <ExtraDetails />
        </section>
    );
}
