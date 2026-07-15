import type { Column, Task } from "../../types/types";

export const INITIAL_COLUMNS: Column[] = [
  { status: "todo", title: "To Do" },
  { status: "in-progress", title: "In Progress" },
  { status: "done", title: "Done" },
];

export const INITIAL_TASKS: Task[] = [
  {
    id: "task-1",
    title: "Design onboarding flow",
    date: "2026-07-03",
    status: "todo",
  },
  {
    id: "task-2",
    title: "Write API documentation",
    date: "2026-06-28",
    status: "todo",
  },
  {
    id: "task-3",
    title: "Q2 metrics report",
    date: null,
    status: "todo",
  },
  {
    id: "task-4",
    title: "Refactor auth module",
    date: "2026-07-06",
    status: "in-progress",
  },
  {
    id: "task-5",
    title: "User research interviews",
    date: "2026-07-01",
    status: "in-progress",
  },
  {
    id: "task-6",
    title: "Set up CI pipeline",
    date: "2026-06-25",
    status: "done",
  },
];
