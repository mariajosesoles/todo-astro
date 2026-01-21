import { useTasks } from "../../hooks/useTasks";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export function TodoApp() {
  const { tasks, loading, error, add, toggle, remove } = useTasks();

  if (loading) return <p>Cargando tareas…</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  return (
    <div className="max-w-md mx-auto space-y-4">
      <TodoForm onAdd={add} />
      <TodoList todos={tasks} onToggle={toggle} onDelete={remove} />
    </div>
  );
}
