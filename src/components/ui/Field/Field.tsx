import styles from "./Field.module.css";

type FieldProps = {
  className?: string;
  labelClassName?: string;
  id?: string;
  type?: "text" | "date" | "search";
  label: string;
  value?: string;
  onChange?: React.FormEventHandler<HTMLInputElement>;
};

const Field = (props: FieldProps) => {
  const {
    className = "",
    labelClassName = "",
    id,
    type = "text",
    label,
    value,
    onChange,
  } = props;

  return (
    <div className={`${styles.field} ${className}`}>
      <label className={`${styles.label} ${labelClassName}`} htmlFor={id}>
        {label}
      </label>
      <input
        className={styles.input}
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder=" "
        autoComplete="off"
      />
    </div>
  );
};

export default Field;
