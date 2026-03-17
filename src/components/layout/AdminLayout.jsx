import React from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { BarChart3, Users, Store, ShieldCheck, Settings, LogOut, BadgeCheck } from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3, path: "/admin/dashboard" },
  { id: "students", label: "Étudiants", icon: Users, path: "/admin/students" },
  { id: "merchants", label: "Commerçants", icon: Store, path: "/admin/merchants" },
  { id: "reviews", label: "Avis", icon: ShieldCheck, path: "/admin/reviews" },
  { id: "settings", label: "Paramètres", icon: Settings, path: "/admin/settings" },
];

function AdminLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen bg-slate-100 text-slate-900 font-sans">
      {/* SIDEBAR FIXE */}
      <aside className="w-72 border-r border-slate-200 bg-white p-5 hidden lg:flex flex-col">
        <div className="flex items-center gap-3 rounded-3xl bg-slate-900 p-4 text-white shadow-sm mb-8">
          <BadgeCheck className="h-6 w-6" />
          <h1 className="text-lg font-bold">LocalConnect</h1>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive ? "bg-slate-900 text-white shadow-md" : "text-slate-600 hover:bg-slate-100"
                }`
              }
            >
              <item.icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button 
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-rose-600 hover:bg-rose-50 mt-auto"
        >
          <LogOut className="h-5 w-5" />
          Déconnexion
        </button>
      </aside>

      {/* CONTENU MOBILE ET MAIN */}
      <main className="flex-1 overflow-y-auto">
        <div className="p-4 md:p-8">
          <Outlet /> {/* C'est ici que tes pages Dashboard, Students, etc. s'afficheront */}
        </div>
      </main>
    </div>
  );
}
export default AdminLayout;