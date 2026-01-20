export default function TaskCounter({
  total,
  pending,
  completed,
}) {
  return (
    <div className="flex justify-between items-center mb-4 text-sm">
      <span className="text-slate-600">
        Total: <strong>{total}</strong>
      </span>

      <div className="flex gap-2">
        <span className="px-2 py-1 rounded-full bg-yellow-100 text-yellow-700">
          Pendientes: {pending}
        </span>
        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700">
          Completadas: {completed}
        </span>
      </div>
    </div>
  );
}
