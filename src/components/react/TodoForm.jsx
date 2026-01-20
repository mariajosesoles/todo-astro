import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={submit} className="flex gap-2 mb-4">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Nueva tarea..."
        className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-200"
      />
      <button
        className="bg-blue-600 text-white px-4 rounded-lg hover:bg-blue-700 transition"
      >
        +
      </button>
    </form>
  );
}
