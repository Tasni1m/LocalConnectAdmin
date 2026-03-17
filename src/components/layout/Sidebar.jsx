import React from "react";
import { NavLink } from "react-router-dom";
import {
  BarChart3,
  Users,
  Store,
  ShieldCheck,
  Settings,
  BadgeCheck,
} from "lucide-react";

function Sidebar() {
  const items = [
    { to: "/admin/dashboard", label: "Dashboard", icon: BarChart3 },
    { to: "/admin/students", label: "Étudiants", icon: Users },
    { to: "/admin/merchants", label: "Commerçants", icon: Store },
    { to: "/admin/reviews", label: "Avis", icon: ShieldCheck },
    { to: "/admin/settings", label: "Paramètres", icon: Settings },
  ];

  return (
    <aside className="w-72 border-r border-slate-200 bg-white p-5">
      <div className="flex items-center gap-3 rounded-3xl bg-slate-900 p-4 text-white shadow-sm">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
          <BadgeCheck className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-slate-300">Back Office</p>
          <h1 className="text-lg font-bold">LocalConnect</h1>
        </div>
      </div>

      <nav className="mt-8 space-y-2">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-slate-900 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </NavLink>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;