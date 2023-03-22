import * as Yup from "yup";
import { isValidUserName } from "./utils/utils";

export const langs = ["english", "french", "espanol", "arabic", "spanish", "hindi", "other"];

export const signupSchema = Yup.object().shape({
    email: Yup.string().email().required().min(5).max(70),
    name: Yup.string().min(3).max(70).required(),
    dob: Yup.date().required("Invalid Date"),
    place: Yup.string().required().min(3).max(70),
    password: Yup.string().required().min(5).max(24),
    // bio: Yup.string().required().min(10).max(140),
    lang: Yup.string().oneOf(langs, "Invalid Selection!").required(),
    username: Yup.string().required().min(5).max(30)
        .test("isValidUserName", "UserName not Available", (value) => isValidUserName(value)),
});

export interface signupValues extends Yup.Asserts<typeof signupSchema> { };

export const loginSchema = Yup.object().shape({
    email: Yup.string().email().required().min(5).max(70),
    password: Yup.string().required().min(5).max(24),
});

export interface loginValues extends Yup.Asserts<typeof loginSchema> { };