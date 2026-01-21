import type { Task } from "./api/tasks";
import type { TaskFilter } from "../types/filter";

export function filterTasks(tasks: Task[], filter: TaskFilter) {
  switch (filter) {
    case "pending":
      return tasks.filter(t => !t.completed);
    case "completed":
      return tasks.filter(t => t.completed);
    default:
      return tasks;
  }
}