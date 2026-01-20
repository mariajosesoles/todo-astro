import TodoItem from "./TodoItem";

export default function TodoList({ todos, onToggle, onDelete }) {
  if (!todos.length) {
    return (
      <p className="text-center text-gray-400">
        No hay tareas todavía
      </p>
    );
  }

  return (
    <ul className="space-y-2">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
