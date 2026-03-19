import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { BarChart3, Users, Store, ShieldCheck, Settings, LogOut, BadgeCheck } from "lucide-react";

const navItems = [
  { id: "dashboard", label: "Dashboard",     icon: BarChart3,   path: "/admin/dashboard" },
  { id: "students",  label: "Étudiants",     icon: Users,       path: "/admin/students"  },
  { id: "merchants", label: "Commerçants",   icon: Store,       path: "/admin/merchants" },
  { id: "reviews",   label: "Avis",          icon: ShieldCheck, path: "/admin/reviews"   },
  { id: "settings",  label: "Paramètres",    icon: Settings,    path: "/admin/settings"  },
];

function AdminLayout() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden bg-slate-100 font-sans text-slate-900">
      <aside className="flex w-72 shrink-0 flex-col border-r border-slate-200 bg-white p-5">
        <div className="mb-8 w-full overflow-hidden rounded-2xl bg-slate-900 p-4 text-white shadow-sm">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">
              <BadgeCheck className="h-5 w-5" />
            </div>

            <div className="min-w-0">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-300">
                Back Office
              </p>
              <h1 className="text-base font-bold break-words">
                LocalConnect
              </h1>
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {navItems.map(function (item) {
            return (
              <NavLink
                key={item.id}
                to={item.path}
                className={function ({ isActive }) {
                  return (
                    "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors " +
                    (isActive
                      ? "bg-slate-900 text-white"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900")
                  );
                }}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {item.label}
              </NavLink>
            );
          })}
        </nav>

        <button
          onClick={function () { navigate("/login"); }}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-rose-600 transition-colors hover:bg-rose-50"
        >
          <LogOut className="h-4 w-4 shrink-0" />
          Déconnexion
        </button>
      </aside>
      <main className="flex-1 overflow-y-auto">
        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default AdminLayout;