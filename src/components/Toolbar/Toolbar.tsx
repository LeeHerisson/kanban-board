import styles from "./Toolbar.module.css";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import SearchTaskForm from "./SearchTaskForm/SearchTaskForm";

type ToolbarProps = {
  addTask: (title: string, date: string | null) => void;
  onSearch: (query: string) => void;
};

const Toolbar = (props: ToolbarProps) => {
  const { addTask, onSearch } = props;

  return (
    <div className={styles.toolbar}>
      <h1 className={styles.title}>Kanban Board</h1>
      <AddTaskForm addTask={addTask} />
      <SearchTaskForm onSearch={onSearch} />
    </div>
  );
};

export default Toolbar;
