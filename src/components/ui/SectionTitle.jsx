function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-4 flex items-start gap-3">
      {Icon && (
        <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
      )}

      <div>
        <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
        {subtitle && <p className="text-sm text-slate-500">{subtitle}</p>}
      </div>
    </div>
  );
}

export default SectionTitle;