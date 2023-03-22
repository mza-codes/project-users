import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { langs, signupSchema } from "../../schema";
import InputField from "../Input";
import Loader from "../Loader";
import Select from "../Select";

const initialValues = {
    email: "",
    dob: "",
    lang: "english",
    password: "",
    name: "",
    place: "",
    username: "",
};

export default function SignUp() {
    const [loading, setLoading] = useState(false);

    console.count("Rendered Signup");

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
            <h2 className="lg:text-5xl text-3xl underline-offset-2 underline pb-4">SignUp</h2>
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
                                <InputField type="text" placeholder="josse56" name="username" validate={1} />
                                <InputField type="password" placeholder="Password" name="password" />
                            </div>
                        </section>
                        <Select label="Language" name="lang" options={langs} />

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
