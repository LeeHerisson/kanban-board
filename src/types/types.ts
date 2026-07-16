export type TaskStatus = "todo" | "in-progress" | "done" | "new";

export interface Task {
  id: string;
  title: string;
  dueDate: string | null;
  isOverdue?: boolean;
  status: TaskStatus;
}

export interface Column {
  status: TaskStatus;
  title: string;
}
