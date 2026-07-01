import styles from "./Toolbar.module.css";
import AddTaskForm from "./AddTaskForm/AddTaskForm";
import SearchTaskForm from "./SearchTaskForm/SearchTaskForm";

const Toolbar = () => {
  return (
    <div className={styles.toolbar}>
      <h1 className={styles.title}>Kanban Board</h1>
      <AddTaskForm />
      <SearchTaskForm />
    </div>
  );
};

export default Toolbar;
