import { BsFillImageFill, BsTelephoneFill } from "react-icons/bs";
import useAuthService from "../services/authService";
import { Link } from "react-router-dom";

export default function Profile() {
    const user = useAuthService((s) => s.user);
    if (!user) return null;
    return (
        <section className="page gap-6">
            <div className="bg-white bg-opacity-40 shadow-lg text-gray-800 hover:bg-opacity-100 min-w-[200px] sm:min-w-[380px] col gap-2 relative p-4 rounded-md">
                <article>
                    {/* Image URL */}
                    <h3 className="text-3xl capitalize font-semibold">{user.name}</h3>
                    <b>{user.username}</b>
                    <h4 className="text-lg capitalize">{user.place}</h4>
                    <p className="text-lg">{user.email}</p>
                    <p className="text-lg capitalize">
                        Language: <b>{user.lang}</b>
                    </p>
                    {user.mobile && (
                        <p className="text-lg">
                            Mobile: <b>{user.mobile}</b>
                        </p>
                    )}
                    <p>Joined On: {new Date(user.createdAt).toLocaleDateString()}</p>
                </article>

                <div className="inline-flex gap-4 items-center">
                    <span className={`text-xl ${!user.image_url ? "text-red-400" : "text-emerald-400"}`}>
                        <BsFillImageFill />
                    </span>

                    <span className={`text-xl ${!user.mobile ? "text-red-400" : "text-emerald-400"}`}>
                        <BsTelephoneFill />
                    </span>
                </div>

                <span className={`text-sm py-2 ${!user.verified ? "text-red-400" : "text-emerald-400"}`}>
                    Status: {!user.verified ? <b>INACTIVE</b> : <b>ACTIVE</b>}
                </span>
            </div>
            <Link className="text-lg text-sky-500 hover:text-sky-400" to={"/complete-profile"}>
                Update Profile
            </Link>
        </section>
    );
}
