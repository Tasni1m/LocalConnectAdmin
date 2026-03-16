import StatisticsSection from "../StatisticsSection";
import StudentsSection from "../students/StudentsSection";
import MerchantsSection from "../merchants/MerchantsSection";

import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { BarChart3, Store, Users, ShieldCheck } from "lucide-react";

function NavItem({ to, icon: Icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${
          isActive
            ? "bg-slate-900 text-white shadow-md"
            : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:shadow-sm"
        }`
      }
    >
      <Icon size={18} />
      <span>{label}</span>
    </NavLink>
  );
}

function AdminDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-200 p-4 md:p-6">
      <div className="mx-auto max-w-7xl">
        <header className="mb-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                <ShieldCheck size={14} />
                Espace administration
              </div>
              <h1 className="text-2xl font-bold text-slate-900 md:text-4xl">
                Dashboard administrateur
              </h1>
              <p className="mt-2 max-w-2xl text-sm text-slate-500 md:text-base">
                Gérez les étudiants, les commerçants et consultez les statistiques de la plateforme
                depuis une interface claire et centralisée.
              </p>
            </div>

        
          </div>
        </header>

        <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-3xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="mb-4 text-sm font-semibold text-slate-800">Navigation</p>

            <nav className="flex flex-col gap-3">
              <NavItem to="/statistics" icon={BarChart3} label="Statistiques" />
              <NavItem to="/list-merchants" icon={Store} label="Liste des commerçants" />
              <NavItem to="/list-students" icon={Users} label="Liste des étudiants" />
            </nav>
          </aside>

          <main className="rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:p-6">
            <Routes>
              <Route path="/" element={<Navigate to="/statistics" replace />} />
              <Route path="/statistics" element={<StatisticsSection />} />
              <Route path="/list-merchants" element={<MerchantsSection />} />
              <Route path="/list-merchants/:id" element={<MerchantsSection />} />
              <Route path="/list-students" element={<StudentsSection />} />
              <Route path="/list-students/:id" element={<StudentsSection />} />
            </Routes>
          </main>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;