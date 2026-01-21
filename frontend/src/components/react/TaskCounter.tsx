export default function TaskCounter({ total, pending, completed }) {
  return (
    <div className="mb-4 flex items-center justify-between text-sm">
      <span className="text-slate-600">Total: <strong>{total}</strong></span>
      <div className="flex gap-2">
        <span className="rounded-full bg-yellow-100 px-2 py-1 text-yellow-700">Pendientes {pending}</span>
        <span className="rounded-full bg-green-100 px-2 py-1 text-green-700">Hechas {completed}</span>
      </div>
    </div>
  );
}
