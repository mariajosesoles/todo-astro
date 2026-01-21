import { useEffect, useState } from "react";
import {
  fetchTasks,
  createTask,
  toggleTask,
  deleteTask,
  type Task
} from "../lib/api/tasks";

export function useTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchTasks()
      .then(setTasks)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  async function add(title: string) {
    const task = await createTask(title);
    setTasks(prev => [...prev, task]);
  }

  async function toggle(id: number, completed: boolean) {
    const updated = await toggleTask(id, completed);
    setTasks(prev =>
      prev.map(t => (t.id === id ? updated : t))
    );
  }

  async function remove(id: number) {
    await deleteTask(id);
    setTasks(prev => prev.filter(t => t.id !== id));
  }

  return { tasks, loading, error, add, toggle, remove };
}
