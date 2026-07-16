import type { Column, Task } from "../../types/types";

export const INITIAL_COLUMNS: Column[] = [
  { status: "todo", title: "To Do" },
  { status: "in-progress", title: "In Progress" },
  { status: "done", title: "Done" },
];

export const INITIAL_TASKS: Task[] = [
  {
    id: "task-1",
    title: "Pack bags for the flight",
    dueDate: "2026-07-28",
    status: "todo",
  },
  {
    id: "task-2",
    title: "Graduate the Codify group",
    dueDate: "2026-07-25",
    status: "todo",
  },
  {
    id: "task-3",
    title: "Pay for Claude subscription",
    dueDate: null,
    status: "todo",
  },
  {
    id: "task-4",
    title: "Finish Kanban board MVP",
    dueDate: "2026-07-27",
    status: "in-progress",
  },
  {
    id: "task-5",
    title: "Register trip on ruID",
    dueDate: "2026-07-20",
    status: "in-progress",
  },
  {
    id: "task-6",
    title: "Buy tickets",
    dueDate: "2026-07-11",
    status: "done",
  },
];
