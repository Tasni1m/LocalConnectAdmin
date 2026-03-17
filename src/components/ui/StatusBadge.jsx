function StatusBadge({ status }) {
  const styles = {
    pending: "bg-amber-100 text-amber-700",
    validated: "bg-blue-100 text-blue-700",
    active: "bg-emerald-100 text-emerald-700",
    inactive: "bg-slate-100 text-slate-700",
  };

  const labels = {
    pending: "En attente",
    validated: "Validé",
    active: "Actif",
    inactive: "Inactif",
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status] || "bg-slate-100 text-slate-700"}`}>
      {labels[status] || status}
    </span>
  );
}
export default StatusBadge;