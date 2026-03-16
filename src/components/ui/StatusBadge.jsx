function StatusBadge({ status }) {
  const styles = {
    Actif: 'bg-emerald-100 text-emerald-700',
    'En attente': 'bg-amber-100 text-amber-700',
    Validé: 'bg-blue-100 text-blue-700',
  };

  return (
    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${styles[status] || 'bg-slate-100 text-slate-700'}`}>
      {status}
    </span>
  );
}
export default StatusBadge;