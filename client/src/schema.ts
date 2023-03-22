import * as Yup from "yup";

export const signupSchema = Yup.object().shape({
    email: Yup.string().email().required().min(5).max(70),
    name: Yup.string().min(3).max(70).required(),
    dob: Yup.date().required("Invalid Date"),
    place: Yup.string().required().min(3).max(70),
    username: Yup.string().required().min(5).max(30),
    password: Yup.string().required().min(5).max(24),
    bio: Yup.string().required().min(10).max(140)
    // langs
});

export const langs = ["en", "fr", "es", "ar", "sp"];

export interface signupSchemaType extends Yup.Asserts<typeof signupSchema> { };