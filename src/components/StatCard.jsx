function StatCard({ item }) {
  const Icon = item.icon;
  const isPositive = item.delta.startsWith("+");

  return (
    <div className="rounded-3xl bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium text-slate-500">{item.label}</p>
        <div className="rounded-2xl bg-slate-100 p-2">
          <Icon className="h-5 w-5 text-slate-600" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <h3 className="text-3xl font-bold text-slate-900">{item.value}</h3>
        <span
          className={`rounded-full px-2 py-1 text-xs font-bold ${
            isPositive ? "bg-emerald-100 text-emerald-700" : "bg-rose-100 text-rose-700"
          }`}
        >
          {item.delta}
        </span>
      </div>
    </div>
  );
}

export default StatCard;