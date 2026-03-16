import React from "react";
import { BarChart3, Users, Store, ShieldCheck, Settings, BadgeCheck } from "lucide-react";

const iconMap = {
  dashboard: BarChart3,
  students: Users,
  merchants: Store,
  reviews: ShieldCheck,
  settings: Settings,
};

function Sidebar(props) {
  return (
    <aside className="border-r border-slate-200 bg-white p-5">
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
        {props.items.map(function (item) {
          const Icon = iconMap[item.id];

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                item.id === "dashboard"
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </a>
          );
        })}
      </nav>

      <div className="mt-8 rounded-3xl bg-slate-50 p-4">
        <p className="text-sm font-semibold text-slate-900">Résumé rapide</p>
        <div className="mt-3 space-y-2 text-sm text-slate-600">
          <p>• 17 avis à relire</p>
          <p>• 2 cartes à valider</p>
          <p>• 1 commerce inactif</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;