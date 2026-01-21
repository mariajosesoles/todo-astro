import { useTasks } from "../../hooks/useTasks";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilter";
import { filterTasks } from "../../lib/filterTasks";
import type { TaskFilter } from "../../types/filter";
import { useState } from "react";

export function TodoApp() {
  const { tasks, loading, error, add, toggle, remove } = useTasks();
  const [filter, setFilter] = useState<TaskFilter>("all");

  if (loading) return <p>Cargando tareas…</p>;
  if (error) 
    return 
    <p className="text-red-500">
      {error}
    </p>;

  return (
    <div className="max-w-md mx-auto space-y-4">
      <TodoForm onAdd={add} />
      <TodoFilters filter={filter} onChange={setFilter} />
      <TodoList 
        todos={tasks} 
        onToggle={toggle}
        onDelete={remove} 
      />
    </div>
  );
}
