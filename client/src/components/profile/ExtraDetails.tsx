import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuthService from "../../services/authService";

export default function ExtraDetails() {
    const [err, setErr] = useState("");
    const loading = useAuthService((s) => s.loading);
    const updateUser = useAuthService((s) => s.updateUser);
    const user = useAuthService((s) => s.user);
    const route = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data: any = {};
        formData.forEach((val, i) => {
            data[i] = val;
        });
        console.log("Final Data: ", data);
        const res = await updateUser(user?._id ?? "", data);
        if (res) route("/dashboard");
    };

    return (
        <form onSubmit={handleSubmit} className="col border-2= lg:w-96 p-3 text-left center gap-2">
            <label htmlFor="mobile" className="text-left">
                Mobile number
            </label>
            <input
                type="tel"
                placeholder="Mobile Number"
                className="input-field"
                required
                maxLength={14}
                minLength={8}
                name="mobile"
            />
            <label className="btn btn-hover bg-cyan-200 hover:bg-cyan-300" htmlFor="image">
                Upload Image
            </label>
            <input type="file" name="image" id="image" required accept="image/*" hidden />

            <span className="err-msg">{err}</span>

            <button
                disabled={loading}
                type="submit"
                className="btn btn-hover bg-teal-500 hover:bg-teal-700 text-white"
            >
                Submit
            </button>

            <Link className="text-sm text-sky-500 hover:text-sky-400" to={"/forgot-password"}>
                Forgot Password ?
            </Link>
        </form>
    );
}
