import { Form, Formik, FormikHelpers } from "formik";
import { loginSchema, loginValues } from "../../schema";
import InputField from "../Input";
import Loader from "../Loader";
import useAuthService from "../../services/authService";
import { useNavigate } from "react-router-dom";

const initialValues: loginValues = {
    email: "",
    password: "",
    // username: "",
};

export default function Login() {
    const loading = useAuthService((s) => s.loading);
    const loginUser = useAuthService((s) => s.loginUser);
    const route = useNavigate();

    async function handleSubmit(values: typeof initialValues, actions: FormikHelpers<typeof initialValues>) {
        const res = await loginUser(values);
        if (res.isLoggedIn) {
            if (res.user?.mobile || res.user?.image_url) route("/dashboard");
            else route("/complete-profile");
        }
    }

    return (
        <>
            <h2 className="auth-title">LogIn</h2>
            <Formik
                validateOnChange
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={loginSchema}
            >
                {(props) => (
                    <Form className="col center gap-2">
                        <InputField type="email" placeholder="james@xyz.com" name="email" />
                        <InputField type="password" placeholder="Password" name="password" />

                        <button
                            disabled={loading || props.isSubmitting}
                            type="submit"
                            className="btn btn-hover bg-orange-500 hover:bg-orange-600 text-white mt-3"
                        >
                            {loading || props.isSubmitting ? "Loading.." : "Submit"}
                        </button>
                        {(loading || props.isSubmitting) && <Loader color="#111" />}
                    </Form>
                )}
            </Formik>
        </>
    );
}
