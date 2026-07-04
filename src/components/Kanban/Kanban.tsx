import styles from "./Kanban.module.css";
import type { Task } from "../../types/types";
import { useState } from "react";

import Board from "../Board/Board";
import Toolbar from "../Toolbar/Toolbar";

const Kanban = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "task-1",
      title: "Design onboarding flow",
      dueDate: "2026-07-03",
      status: "todo",
      isDone: false,
    },
    {
      id: "task-2",
      title: "Write API documentation",
      dueDate: "2026-06-28",
      status: "todo",
      isDone: false,
    },
    {
      id: "task-3",
      title: "Q2 metrics report",
      dueDate: null,
      status: "todo",
      isDone: false,
    },
    {
      id: "task-4",
      title: "Refactor auth module",
      dueDate: "2026-07-06",
      status: "in-progress",
      isDone: false,
    },
    {
      id: "task-5",
      title: "User research interviews",
      dueDate: "2026-07-01",
      status: "in-progress",
      isDone: false,
    },
    {
      id: "task-6",
      title: "Set up CI pipeline",
      dueDate: "2026-06-25",
      status: "done",
      isDone: true,
    },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = () => {
    const newTask: Task = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title: newTaskTitle,
      isDone: false,
      dueDate: "2026-07-07",
      status: "todo",
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className={styles.kanban}>
      <Toolbar
        addTask={addTask}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <Board tasks={tasks} onDeleteTaskButtonClick={deleteTask} />
    </div>
  );
};

export default Kanban;
