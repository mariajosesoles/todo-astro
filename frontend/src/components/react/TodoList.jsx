import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) {
    return (
      <div className="rounded-lg border border-dashed p-6 text-center text-slate-500">
        No hay tareas. ¡Agrega la primera!
      </div>
    );
  }
  return (
    <ul className="space-y-2">
      {todos.map(t => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
