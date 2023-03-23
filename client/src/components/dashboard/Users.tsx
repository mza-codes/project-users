import { DBUser } from "../../@types";
import UserTile from "../UserTile";

type Props = {
    users: DBUser[];
};

export default function Users({ users }: Props) {
    return (
        <section className="row center gap-2">
            {users.map((user) => (
                <UserTile key={user._id} user={user} />
            ))}
        </section>
    );
}
