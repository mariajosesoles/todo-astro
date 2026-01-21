import { useEffect, useMemo, useState } from "react";

const STORAGE_KEY = "todo-ui-pro";

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setTasks(saved ? JSON.parse(saved) : []);
    setLoading(false);
  }, []);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const filteredTasks = useMemo(() => {
    if (filter === "completed") return tasks.filter(t => t.completed);
    if (filter === "pending") return tasks.filter(t => !t.completed);
    return tasks;
  }, [tasks, filter]);

  const addTask = (title) =>
    setTasks(prev => [...prev, { id: crypto.randomUUID(), title, completed: false }]);

  const toggleTask = (id) =>
    setTasks(prev => prev.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));

  const removeTask = (id) =>
    setTasks(prev => prev.filter(t => t.id !== id));

  return {
    tasks: filteredTasks,
    filter,
    setFilter,
    loading,
    total: tasks.length,
    pending: tasks.filter(t => !t.completed).length,
    completed: tasks.filter(t => t.completed).length,
    addTask,
    toggleTask,
    removeTask,
  };
}
