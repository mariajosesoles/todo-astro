import { useTasks } from "../../hooks/useTasks";
import TodoForm from "./TodoForm";
import TodoFilters from "./TodoFilter";
import TodoList from "./TodoList";
import TaskCounter from "./TaskCounter";

export default function TodoApp() {
  const {
    tasks, filter, setFilter, loading,
    total, pending, completed,
    addTask, toggleTask, removeTask,
  } = useTasks();

  if (loading) return <p className="text-center text-slate-500">Cargando…</p>;

  return (
    <>
      <TaskCounter total={total} pending={pending} completed={completed} />
      <TodoForm onAdd={addTask} />
      <TodoFilters filter={filter} onChange={setFilter} />
      <TodoList todos={tasks} onToggle={toggleTask} onDelete={removeTask} />
    </>
  );
}
