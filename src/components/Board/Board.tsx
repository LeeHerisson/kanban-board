import styles from "./Board.module.css";
import Column from "../Column/Column";
import Card from "../Card/Card";

const Board = () => {
  return (
    <div className={styles.board}>
      <Column columnName="To Do" tasksCount="3">
        <Card id="task-1" title="Design onboarding flow" dueDate="Jul 3" />
        <Card
          id="task-2"
          title="Write API documentation"
          dueDate="Jun 28"
          isOverdue
        />
        <Card id="task-3" title="Q2 metrics report" />
      </Column>
      <Column columnName="In Progress" tasksCount="2">
        <Card id="task-4" title="Refactor auth module" dueDate="Jul 6" />
        <Card id="task-5" title="User research interviews" dueDate="Jul 1" />
      </Column>
      <Column columnName="Done" tasksCount="1">
        <Card id="task-6" title="Set up CI pipeline" dueDate="Jun 25" />
      </Column>
    </div>
  );
};

export default Board;
