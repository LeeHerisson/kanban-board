import styles from "./AddTaskForm.module.css";
import Button from "../../ui/Button/Button";
import Field from "../../ui/Field/Field";

const AddTaskForm = () => {
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Field className={styles.field} id="new-task" label="New task title" />
      <Field
        className={styles.date}
        labelClassName="visually-hidden"
        id="choose-date"
        label="Choose date"
        type="date"
      />

      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;
