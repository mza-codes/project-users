import { Link } from "react-router-dom";
import { DBUser } from "../@types";
import { btnCls } from "../components";

type Props = {
  users: DBUser[];
};

export default function UsersPage({ users }: Props) {
  const isEmpty = users?.length <= 0;

  return (
    <div className="flex flex-col gap-2 items-center">
      {isEmpty && <h2 className="font-semibold text-2xl">No Users Found!</h2>}
      <div className="bg-cyan-800 p-2 text-white hover:bg-opacity-60">
        {users.length} Users in Cache!
      </div>
      <div className="flex flex-row gap-2 flex-wrap p-2 items-center justify-center">
        {users?.map((user) => (
          <div key={user.sid}
            className="bg-amber-600 text-start w-[150px] p-2 flex flex-col gap-2 truncate text-black">
            {user.email} <br />
            {user.gender} <br />
            {user.name.first} <br />
          </div>
        ))}
      </div>

      <Link to="/" className={`${btnCls} bg-teal-900 text-white`} >Home</Link>
    </div>
  )
}