import useAuthService from "../services/authService";

export default function UserDashboard() {
    const user = useAuthService((s) => s.user);
    return (
        <section className="page text-center">
            <h2 className="text-5xl">Welcome {user?.name} to Dashboard!</h2>
            <span className="px-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus tempore commodi inventore
                quae cum. Deserunt rerum id fuga ratione aspernatur nostrum labore reprehenderit corporis,
                blanditiis ad amet obcaecati reiciendis expedita.
            </span>
        </section>
    );
}
