import { useTasks } from "../../hooks/useTasks";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function TodoApp() {
  const {
    tasks,
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
      <TodoList
        todos={tasks}
        onToggle={toggleTask}
        onDelete={removeTask}
      />
    </>
  );
}
