import styles from "./Board.module.css";
import { columns } from "../../constant/columns";
import type { Task } from "../../types/types";

import Column from "../Column/Column";
import Card from "../Card/Card";

type BoardProps = {
  tasks: Task[];
  onDeleteTaskButtonClick: (id: string) => void;
};

const Board = (props: BoardProps) => {
  const { tasks, onDeleteTaskButtonClick } = props;

  return (
    <div className={styles.board}>
      {columns.map((column) => {
        const columnTasks = tasks.filter(
          (task) => task.status === column.status,
        );

        return (
          <Column
            key={column.status}
            title={column.title}
            count={columnTasks.length}
          >
            {columnTasks.map((task) => (
              <Card
                key={task.id}
                {...task}
                onDeleteTaskButtonClick={onDeleteTaskButtonClick}
              />
            ))}
          </Column>
        );
      })}
    </div>
  );
};

export default Board;
