import styles from "./Toolbar.module.css";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import SearchTaskForm from "./SearchTaskForm/SearchTaskForm";

type ToolbarProps = {
  addTask: (title: string, date: string | null) => void;
};

const Toolbar = (props: ToolbarProps) => {
  const { addTask } = props;

  return (
    <div className={styles.toolbar}>
      <h1 className={styles.title}>Kanban Board</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm />
    </div>
  );
};

export default Toolbar;
