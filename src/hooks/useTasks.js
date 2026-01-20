import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/tasks.service";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      setLoading(true);
      const data = await getTasks();
      setTasks(data);
    } catch {
      setError("Error al cargar tareas");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title) => {
    const newTask = await createTask({
      title,
      completed: false,
    });
    setTasks((prev) => [...prev, newTask]);
  };

  const toggleTask = async (task) => {
    const updated = await updateTask(task.id, {
      completed: !task.completed,
    });

    setTasks((prev) =>
      prev.map((t) => (t.id === updated.id ? updated : t))
    );
  };

  const removeTask = async (id) => {
    await deleteTask(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    loading,
    error,
    addTask,
    toggleTask,
    removeTask,
  };
}
