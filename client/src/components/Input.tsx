import { useField } from "formik";

interface InputFieldProps
    extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}

export default function InputField(props: InputFieldProps) {
    // @ts-ignore
    const [field, meta] = useField(props);

    return (
        <div className="customField">
            <span className="label">{props.name}</span>
            <div className="relative">
                <input
                    className={`sm:w-[320px] ${
                        meta.error && meta.touched
                            ? "error"
                            : !meta.error && meta.touched
                            ? "success"
                            : "normal"
                    }`}
                    {...field}
                    {...props}
                />
            </div>
            <p className="err-msg">{meta.error && meta.touched ? meta.error : ""}</p>
        </div>
    );
}
