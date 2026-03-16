const StatCard = ({ label, value, color, trend }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border">
    <p className="text-gray-500 text-sm font-medium">{label}</p>
    <div className="flex items-end justify-between mt-2">
      <h3 className="text-3xl font-bold text-gray-800">{value}</h3>
      <span className={`text-xs font-bold px-2 py-1 rounded ${trend > 0 ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
        {trend > 0 ? '+' : ''}{trend}%
      </span>
    </div>
  </div>
);

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <StatCard label="Étudiants Actifs" value="1,240" color="orange" trend={12} />
  <StatCard label="Commerçants" value="84" color="green" trend={5} />
  <StatCard label="Coupons Scannés" value="5,892" color="blue" trend={24} />
</div>

export default StatCard;