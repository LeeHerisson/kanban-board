import styles from "./SearchTaskForm.module.css";
import Field from "../../ui/Field/Field";

type SearchTaskFormProps = {
  onSearch: (searchQuery: string) => void;
};

const SearchTaskForm = (props: SearchTaskFormProps) => {
  const { onSearch } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    onSearch(value);
  };

  return (
    <div className={styles.form}>
      <Field
        className={styles.field}
        id="search-task"
        label="Search task"
        type="search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchTaskForm;
