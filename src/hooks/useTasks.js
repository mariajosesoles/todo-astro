import { useEffect, useState } from "react";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../services/tasks.service";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
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
    } catch (err) {
      setError("Error al cargar tareas");
    } finally {
      setLoading(false);
    }
  };

  const addTask = async (title) => {
    try {
      const newTask = await createTask({
        title,
        completed: false,
      });
      setTasks((prev) => [...prev, newTask]);
    } catch {
      setError("Error al crear la tarea");
    }
  };

  const toggleTask = async (task) => {
    try {
      const updated = await updateTask(task.id, {
        completed: !task.completed,
      });

      setTasks((prev) =>
        prev.map((t) => (t.id === updated.id ? updated : t))
      );
    } catch {
      setError("Error al actualizar la tarea");
    }
  };

  const removeTask = async (id) => {
    try {
      await deleteTask(id);
      setTasks((prev) => prev.filter((t) => t.id !== id));
    } catch {
      setError("Error al eliminar la tarea");
    }
  };

  return {
    tasks,
    loading,
    error,
    addTask,
    toggleTask,
    removeTask,
  };
}
