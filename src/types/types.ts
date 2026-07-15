export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: string;
  title: string;
  date: string | null;
  isOverdue?: boolean;
  status: TaskStatus;
}

export interface Column {
  status: TaskStatus;
  title: string;
}
