export interface Task {
  name: string;
  complete: boolean;
  id: string;
}

export type Filter = "all" | "completed" | "uncompleted"
