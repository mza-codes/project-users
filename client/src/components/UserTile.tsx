import { DBUser } from "../@types";
import { MdOutlineRemoveModerator, MdError, MdVerifiedUser } from "react-icons/md";

export default function UserTile({ user }: Props) {
    return (
        <div className="bg-green-200 bg-opacity-40 text-gray-800 hover:bg-opacity-100 col gap-2 min-h-[250px] sm:min-h-[200px] min-w-[280px] relative p-4 rounded-lg">
            <h3 className="text-3xl capitalize font-semibold">{user?.name}</h3>
            <h4 className="text-xl capitalize">{user.place}</h4>
            <p className="text-lg">{user.email}</p>
            <p className="text-lg">{user.username}</p>
            <p className="text-lg capitalize">{user.lang}</p>
            <span className={`${!user.verified ? "text-[red]" : "text-emerald-400"}`}>
                {!user.verified ? <MdError /> : <MdVerifiedUser />}
            </span>

            <div className="absolute right-2 bottom-2 flex flex-row-reverse flex-wrap gap-2">
                <span className={`text-3xl icon text-green-400`}>
                    <MdOutlineRemoveModerator />
                </span>

                <span className={`text-3xl icon text-rose-500`}>
                    <MdOutlineRemoveModerator />
                </span>
            </div>
        </div>
    );
}

type Props = {
    user: DBUser;
};
