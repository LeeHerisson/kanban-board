import styles from "./Kanban.module.css";
import type { Task } from "../../types/types";
import { dateMap } from "../../constant/date";
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
  const [newTaskDate, setNewTaskDate] = useState("");

  const yearFormater = (year: string) => {
    const yearNum: number = Number(year);

    if (yearNum < 1000 && yearNum > 100) {
      return yearNum % 1000;
    } else if (yearNum < 100 && yearNum > 10) {
      return yearNum % 100;
    } else if (yearNum < 10 && yearNum > 0) {
      return yearNum % 10;
    }

    return year;
  };
  const dateFormater = (date: string) => {
    const currentYear = new Date().getFullYear().toString();

    const month = dateMap.get(date.split("-")[1]);
    const day = date.split("-")[2];
    const year = date.split("-")[0];

    if (year === currentYear) {
      return `${day} ${month}`;
    }

    return `${day} ${month} ${yearFormater(year)}`;
  };

  console.log(dateFormater("2026-07-07"));

  const addTask = () => {
    if (!newTaskTitle.trim()) {
      return;
    }

    const newTask: Task = {
      id: crypto?.randomUUID() ?? Date.now().toString(),
      title: newTaskTitle,
      isDone: false,
      dueDate: dateFormater(newTaskDate),
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
