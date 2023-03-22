import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { loginSchema, loginValues } from "../../schema";
import InputField from "../Input";
import Loader from "../Loader";

const initialValues: loginValues = {
    email: "",
    password: "",
    // username: "",
};

export default function Login() {
    const [loading, setLoading] = useState(false);

    function handleSubmit(values: typeof initialValues, actions: FormikHelpers<typeof initialValues>) {
        console.log({ values, actions });
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
            actions.setSubmitting(false);
        }, 4000);
    }

    return (
        <>
            <h2 className="lg:text-5xl text-3xl underline-offset-2 underline pb-4">LogIn</h2>
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
