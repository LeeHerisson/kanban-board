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
      date: "2026-07-03",
      status: "todo",
      isDone: false,
    },
    {
      id: "task-2",
      title: "Write API documentation",
      date: "2026-06-28",
      status: "todo",
      isDone: false,
    },
    {
      id: "task-3",
      title: "Q2 metrics report",
      date: null,
      status: "todo",
      isDone: false,
    },
    {
      id: "task-4",
      title: "Refactor auth module",
      date: "2026-07-06",
      status: "in-progress",
      isDone: false,
    },
    {
      id: "task-5",
      title: "User research interviews",
      date: "2026-07-01",
      status: "in-progress",
      isDone: false,
    },
    {
      id: "task-6",
      title: "Set up CI pipeline",
      date: "2026-06-25",
      status: "done",
      isDone: true,
    },
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDate, setNewTaskDate] = useState("");

  const addTask = () => {
    if (!newTaskTitle.trim()) {
      return;
    }

    const newTask: Task = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title: newTaskTitle,
      isDone: false,
      date: newTaskDate,
      status: "todo",
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setNewTaskTitle("");
    setNewTaskDate("");
  };

  const deleteTask = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className={styles.kanban}>
      <Toolbar
        addTask={addTask}
        newTaskDate={newTaskDate}
        setNewTaskDate={setNewTaskDate}
        newTaskTitle={newTaskTitle}
        setNewTaskTitle={setNewTaskTitle}
      />
      <Board tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );
};

export default Kanban;
