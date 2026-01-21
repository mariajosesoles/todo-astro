type Filter = "all" | "pending" | "completed";

type Props = {
  filter: Filter;
  onChange: (filter: Filter) => void;
};

export default function TodoFilters({ filter, onChange }: Props) {
  const base = "rounded-lg border px-4 py-2 text-sm transition";
  const active = "bg-blue-600 text-white";
  const idle = "bg-white text-slate-600 hover:bg-slate-100";

  return (
    <div className="mb-4 flex flex-wrap items-center justify-center gap-3">
      {(["all", "pending", "completed"] as Filter[]).map(k => (
        <button
          key={k}
          type="button"
          className={`${base} ${filter === k ? active : idle}`}
          onClick={() => onChange(k)}
        >
          {k === "all"
            ? "Todas"
            : k === "pending"
              ? "Pendientes"
              : "Completadas"}
        </button>
      ))}
    </div>
  );
}
