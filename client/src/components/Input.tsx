import { useField } from "formik";
import { BsPatchCheckFill } from "react-icons/bs";
import { MdError } from "react-icons/md";

interface InputFieldProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    validate?: 1 | 0;
}

export default function InputField(props: InputFieldProps) {
    // @ts-ignore
    const [field, meta] = useField(props);
    const isError = meta.error && meta.touched;
    const isValid = !meta.error && meta.touched;

    return (
        <div className="customField">
            <span className="label">{props.name}</span>
            <div className="relative">
                <input
                    className={`sm:w-[320px] ${isError ? "error" : isValid ? "success" : "normal"}`}
                    {...field}
                    {...props}
                />
                {props?.validate && (
                    <div
                        style={{ color: isError ? "red" : isValid ? "green" : "navy" }}
                        className={`absolute text-2xl right-3 top-[14px]`}
                    >
                        {isError ? <MdError /> : isValid ? <BsPatchCheckFill /> : null}
                    </div>
                )}
            </div>
            <p className="err-msg">{isError ? meta.error : ""}</p>
        </div>
    );
}
