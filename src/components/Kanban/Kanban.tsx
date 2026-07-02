import styles from "./Kanban.module.css";
import Board from "../Board/Board";
import Toolbar from "../Toolbar/Toolbar";

const Kanban = () => {
  return (
    <div className={styles.kanban}>
      <Toolbar />
      <Board />
    </div>
  );
};

export default Kanban;
