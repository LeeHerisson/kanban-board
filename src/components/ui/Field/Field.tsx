import styles from "./Field.module.css";

type FieldProps = {
  className?: string;
  labelClassName?: string;
  id?: string;
  type?: "text" | "date" | "search";
  label: string;
};

const Field = (props: FieldProps) => {
  const {
    className = "",
    labelClassName = "",
    id,
    type = "text",
    label,
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
        placeholder=" "
        autoComplete="off"
      />
    </div>
  );
};

export default Field;
