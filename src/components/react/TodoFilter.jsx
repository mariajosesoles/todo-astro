export default function TodoFilters({ filter, onChange }) {
  const base =
    "px-3 py-1 rounded-lg text-sm border transition";

  const active = "bg-blue-600 text-white";
  const inactive = "bg-white text-slate-600 hover:bg-slate-100";

  return (
    <div className="flex gap-2 justify-center mb-4">
      <button
        className={`${base} ${
          filter === "all" ? active : inactive
        }`}
        onClick={() => onChange("all")}
      >
        Todas
      </button>

      <button
        className={`${base} ${
          filter === "pending" ? active : inactive
        }`}
        onClick={() => onChange("pending")}
      >
        Pendientes
      </button>

      <button
        className={`${base} ${
          filter === "completed" ? active : inactive
        }`}
        onClick={() => onChange("completed")}
      >
        Completadas
      </button>
    </div>
  );
}
