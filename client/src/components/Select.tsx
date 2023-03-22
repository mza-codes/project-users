import { useField } from "formik";

export default function Select({ options, label, ...props }: any) {
    const [field, meta] = useField(props);
    return (
        <div className="customField">
            <span className="">{label}</span>
            <select
                className={`min-w-[150px] ${
                    meta.error && meta.touched ? "error" : !meta.error && meta.touched ? "success" : "normal"
                }`}
                {...field}
            >
                {options.map((opt: string) => (
                    <option key={opt} value={opt} className="py-2 px-4 capitalize">
                        {opt}
                    </option>
                ))}
            </select>
            <span className="err-msg">{meta.error && meta.touched ? meta.error : ""}</span>
        </div>
    );
}
