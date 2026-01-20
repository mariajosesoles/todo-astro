export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
<li
  className={`flex items-center justify-between border rounded-lg px-3 py-2
  ${todo.optimistic ? "opacity-60" : ""}`}
>
      <span
        onClick={() => onToggle(todo)}
        className={`cursor-pointer ${
          todo.completed
            ? "line-through text-gray-400"
            : ""
        }`}
      >
        {todo.title}
      </span>

      <button
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  );
}
