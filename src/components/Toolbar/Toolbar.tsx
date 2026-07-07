import styles from "./Toolbar.module.css";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import SearchTaskForm from "./SearchTaskForm/SearchTaskForm";

type ToolbarProps = {
  addTask: () => void;
  newTaskDate: string;
  setNewTaskDate: React.Dispatch<React.SetStateAction<string>>;
  newTaskTitle: string;
  setNewTaskTitle: React.Dispatch<React.SetStateAction<string>>;
};

const Toolbar = (props: ToolbarProps) => {
  const {
    addTask,
    newTaskDate,
    setNewTaskDate,
    newTaskTitle,
    setNewTaskTitle,
  } = props;

  return (
    <div className={styles.toolbar}>
      <h1 className={styles.title}>Kanban Board</h1>
      <AddTaskForm
        newTaskDate={newTaskDate}
        setNewTaskDate={setNewTaskDate}
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <SearchTaskForm />
    </div>
  );
};

export default Toolbar;
