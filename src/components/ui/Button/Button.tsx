import styles from "./Button.module.css";

type ButtonProps = {
  type?: "button" | "submit";
  children: React.ReactNode;
};

const Button = (props: ButtonProps) => {
  const { children, type } = props;

  return (
    <button type={type} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
