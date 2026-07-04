export type TaskStatus = "todo" | "in-progress" | "done";

export interface Task {
  id: string;
  title: string;
  isDone: boolean;
  dueDate: string | null;
  status: TaskStatus;
}

export interface Column {
  status: TaskStatus;
  title: string;
}
