import * as Yup from "yup";

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

export interface signupSchemaType extends Yup.Asserts<typeof signupSchema> { };

let test = 0;
let previous = "";
async function isValidUserName(str: string) {
    previous = str;
    if (str.length < 5) return false;
    test++;
    console.log(`Testing name: ${str} ->`, test);
    if (test >= 10) return true;
    return false;
};