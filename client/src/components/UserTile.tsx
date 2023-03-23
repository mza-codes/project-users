import { DBUser } from "../@types";
import { BsShieldFillCheck, BsShieldFillExclamation } from "react-icons/bs";
import useAuthService from "../services/authService";

export default function UserTile({ user }: Props) {
    const toggleUser = useAuthService((s) => s.toggleUser);
    const loading = useAuthService((s) => s.loading);

    return (
        <div className="bg-green-200 bg-opacity-40 text-gray-800 hover:bg-opacity-100 col gap-2 min-h-[250px] sm:min-h-[200px] min-w-[280px] relative p-4 rounded-lg">
            <article>
                <h3 className="text-3xl capitalize font-semibold">{user.name}</h3>
                <b>{user.username}</b>
                <h4 className="text-lg capitalize">{user.place}</h4>
                <p className="text-lg">{user.email}</p>
                <p className="text-lg capitalize">{user.lang}</p>
            </article>
            <span className={`text-sm ${!user.verified ? "text-red-400" : "text-emerald-400"}`}>
                Status: {!user.verified ? <b>INACTIVE</b> : <b>ACTIVE</b>}
            </span>

            <div className="absolute right-2 bottom-2 flex flex-row-reverse flex-wrap gap-2">
                {user.verified ? (
                    <button
                        disabled={loading}
                        onClick={() => toggleUser(user)}
                        title="Deactivate User"
                        className={`text-3xl icon text-green-400`}
                    >
                        <BsShieldFillCheck />
                    </button>
                ) : (
                    <button
                        title="Activate User"
                        disabled={loading}
                        onClick={() => toggleUser(user)}
                        className={`text-3xl icon text-rose-500`}
                    >
                        <BsShieldFillExclamation />
                    </button>
                )}
            </div>
        </div>
    );
}

type Props = {
    user: DBUser;
};
