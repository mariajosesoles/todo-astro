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
  const tempId = `temp-${Date.now()}`;

  const optimisticTask = {
    id: tempId,
    title,
    completed: false,
    optimistic: true,
  };

  setTasks((prev) => [...prev, optimisticTask]);

  try {
    const saved = await createTask({
      title,
      completed: false,
    });

    setTasks((prev) =>
      prev.map((t) => (t.id === tempId ? saved : t))
    );
  } catch {
    setError("Error al crear la tarea");
    setTasks((prev) => prev.filter((t) => t.id !== tempId));
  }
};


  const toggleTask = async (task) => {
  const prevCompleted = task.completed;

  setTasks((prev) =>
    prev.map((t) =>
      t.id === task.id
        ? { ...t, completed: !t.completed }
        : t
    )
  );

  try {
    await updateTask(task.id, {
      completed: !prevCompleted,
    });
  } catch {
    setError("Error al actualizar la tarea");

    // rollback
    setTasks((prev) =>
      prev.map((t) =>
        t.id === task.id
          ? { ...t, completed: prevCompleted }
          : t
      )
    );
  }
};


const removeTask = async (id) => {
  let removed;

  setTasks((prev) => {
    removed = prev.find((t) => t.id === id);
    return prev.filter((t) => t.id !== id);
  });

  try {
    await deleteTask(id);
  } catch {
    setError("Error al eliminar la tarea");

    // rollback
    setTasks((prev) => [...prev, removed]);
  }
};


  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
    return true;
  });

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter(t => !t.completed).length;
  const completedTasks = tasks.filter(t => t.completed).length;
  
  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    loading,
    error,
    totalTasks,
    pendingTasks,
    completedTasks,
    addTask,
    toggleTask,
    removeTask,
  };
}
