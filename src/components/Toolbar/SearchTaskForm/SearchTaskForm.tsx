import styles from "./SearchTaskForm.module.css";
import Field from "../../ui/Field/Field";

const SearchTaskForm = () => {
  return (
    <form className={styles.form}>
      <Field
        className={styles.field}
        id="search-task"
        label="Search task"
        type="search"
      />
    </form>
  );
};

export default SearchTaskForm;
