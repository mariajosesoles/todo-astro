import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text.trim());
    setText("");
  };

  return (
    <form onSubmit={submit} className="mb-4 flex gap-2">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea…"
        className="flex-1 rounded-lg border px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
      />
      <button
        type="submit"
        className="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        Añadir
      </button>
    </form>
  );
}
