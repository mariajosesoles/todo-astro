import { useTasks } from "../../hooks/useTasks";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import TodoFilters from "./TodoFilter";

export default function TodoApp() {
  const {
    tasks,
    filter,
    setFilter,
    loading,
    error,
    addTask,
    toggleTask,
    removeTask,
  } = useTasks();

  if (loading) return <p>Cargando tareas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <TodoForm onAdd={addTask} />
      <TodoFilters filter={filter} onChange={setFilter} />
      <TodoList
        todos={tasks}
        onToggle={toggleTask}
        onDelete={removeTask}
      />
    </>
  );
}
