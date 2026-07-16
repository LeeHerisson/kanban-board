import styles from "./Kanban.module.css";
import type { Task } from "../../types/types";
import { useState } from "react";
import Board from "../Board/Board";
import Toolbar from "../Toolbar/Toolbar";
import { INITIAL_COLUMNS, INITIAL_TASKS } from "./Kanban.mocks";

const Kanban = () => {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [columns] = useState(INITIAL_COLUMNS);

  const [searchQuery, setSearchQuery] = useState("");

  const addTask = (title: string, date: string | null) => {
    if (!title.trim()) {
      return;
    }

    const newTask: Task = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title: title,
      dueDate: date,
      isOverdue: false,
      status: "todo",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTask = (taskId: string) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? { ...task, status: task.status === "done" ? "todo" : "done" }
          : task,
      ),
    );
  };

  const deleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const visibleTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchQuery.trim().toLowerCase()),
  );

  return (
    <div className={styles.kanban}>
      <Toolbar addTask={addTask} onSearch={setSearchQuery} />
      <Board
        tasks={visibleTasks}
        columns={columns}
        onDeleteTask={deleteTask}
        onToggleTask={toggleTask}
      />
    </div>
  );
};

export default Kanban;
