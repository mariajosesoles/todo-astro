import type { Task } from "../../lib/api/tasks";
import TodoItem from "./TodoItem";

type Props = {
  todos: Task[];
  onToggle: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
};

export default function TodoList({ todos, onToggle, onDelete }: Props) {
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
        <TodoItem
          key={t.id}
          todo={t}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}
