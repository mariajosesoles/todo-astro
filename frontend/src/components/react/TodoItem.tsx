import type { Task } from "../../lib/api/tasks";

type Props = {
  todo: Task;
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: Props) {
  return (
    <li className="flex items-center justify-between rounded-lg border bg-slate-50 px-3 py-2">
      <button
        type="button"
        onClick={() => onToggle(todo.id, !todo.completed)}
        className={`text-left transition ${todo.completed
            ? "line-through text-slate-400"
            : "text-slate-800"
          }`}
      >
        {todo.title}
      </button>
      <button
        type="button"
        onClick={() => onDelete(todo.id)}
        className="text-red-500 hover:text-red-700"
      >
        ✕
      </button>
    </li>
  );
}
