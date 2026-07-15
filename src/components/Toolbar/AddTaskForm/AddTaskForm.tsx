import styles from "./AddTaskForm.module.css";
import Button from "../../ui/Button/Button";
import Field from "../../ui/Field/Field";
import { useState } from "react";

type AddTaskFormProps = {
  addTask: (title: string, date: string | null) => void;
};

const AddTaskForm = (props: AddTaskFormProps) => {
  const { addTask } = props;

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addTask(newTaskTitle, newTaskDate);
    setNewTaskTitle("");
    setNewTaskDate("");
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
