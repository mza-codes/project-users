import { Form, Formik, FormikHelpers } from "formik";
import { useNavigate } from "react-router-dom";
import { loginSchema, loginValues } from "../../schema";
import useAuthService from "../../services/authService";
import InputField from "../Input";
import Loader from "../Loader";

const initialValues: loginValues = {
    email: "",
    password: "",
};

export default function AdminLogin() {
    const loading = useAuthService((s) => s.loading);
    const adminLogin = useAuthService((s) => s.adminLogin);
    const route = useNavigate();

    async function handleSubmit(values: typeof initialValues, actions: FormikHelpers<typeof initialValues>) {
        const res = await adminLogin(values);

        actions.setSubmitting(false);
        if (res) route("/admin/dashboard");
    }

    return (
        <>
            <h2 className="auth-title">Admin Login</h2>
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
