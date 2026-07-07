import styles from "./AddTaskForm.module.css";
import Button from "../../ui/Button/Button";
import Field from "../../ui/Field/Field";

type AddTaskFormProps = {
  addTask: () => void;
  newTaskDate: string;
  setNewTaskDate: React.Dispatch<React.SetStateAction<string>>;
  newTaskTitle: string;
  setNewTaskTitle: React.Dispatch<React.SetStateAction<string>>;
};

const AddTaskForm = (props: AddTaskFormProps) => {
  const {
    addTask,
    newTaskDate,
    setNewTaskDate,
    newTaskTitle,
    setNewTaskTitle,
  } = props;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask();
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <Field
        className={styles.field}
        id="new-task"
        label="New task title"
        value={newTaskTitle}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNewTaskTitle(event.target.value)
        }
      />
      <Field
        className={styles.date}
        labelClassName="visually-hidden"
        id="choose-date"
        label="Choose date"
        type="date"
        value={newTaskDate}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setNewTaskDate(event.target.value)
        }
      />

      <Button type="submit">Add</Button>
    </form>
  );
};

export default AddTaskForm;
