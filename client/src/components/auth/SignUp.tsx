import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { signupSchema, signupSchemaType } from "../../schema";
import InputField from "../Input";

const initialValues: signupSchemaType = {
    email: "",
    // @ts-ignore
    dob: "",
    password: "",
    name: "",
    place: "",
    username: "",
};

export default function SignUp() {
    const [loading, setLoading] = useState(false);

    console.count("Rendered Signup");
    function handleSubmit(values: any, actions: FormikHelpers<any>) {
        console.log({ values, actions });
        setLoading(true);

        setTimeout(() => setLoading(false), 4000);
    }

    return (
        <Formik
            validateOnChange
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={signupSchema}
        >
            {(props) => (
                <Form className="col center gap-2">
                    <section className="row center gap-2">
                        <div className="col center gap-2">
                            <InputField type="text" placeholder="Joseph Ks" name="name" />
                            <InputField type="email" placeholder="jo@xyz.com" name="email" />
                            <InputField type="date" name="dob" />
                        </div>
                        <div className="col center gap-2">
                            <InputField type="text" placeholder="New York, California" name="place" />
                            <InputField type="text" placeholder="josse56" name="username" />
                            <InputField type="password" placeholder="Password" name="password" />
                        </div>
                        {/* <InputField type="text" placeholder="Joseph Ks" name="bio" /> */}
                    </section>

                    <button
                        disabled={loading || props.isSubmitting}
                        type="submit"
                        className="btn btn-hover bg-orange-500 hover:bg-orange-600 text-white mt-3"
                    >
                        {loading || props.isSubmitting ? "Loading.." : "Submit"}
                    </button>
                </Form>
            )}
        </Formik>
    );
}
