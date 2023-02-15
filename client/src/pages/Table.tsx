import { Link } from "react-router-dom";
import { btnCls } from "../components";

type Props = {
  users: any[];
};

export default function Table({ users }: Props) {
  // const users = useApiStore(s => s.users);
  const isEmpty = users?.length <= 0;

  return (
    <div className="flex flex-col gap-2 items-center">
      {isEmpty && <h2 className="font-semibold text-2xl">No Users Found!</h2>}
      <div className="bg-cyan-800 p-4 text-white hover:bg-opacity-60">
        {users.length} Users in Cache!
      </div>
      <Link to="/" className={`${btnCls} bg-teal-900 text-white`} >Home</Link>
    </div>
  )
}