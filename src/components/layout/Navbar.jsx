import { Search, Bell, LogOut } from "lucide-react";

function Navbar() {
  return (
    <header className="flex flex-col gap-4 rounded-3xl bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
      <div>
        <p className="text-sm text-slate-500">Administration</p>
        <h2 className="text-2xl font-bold tracking-tight">Pilote ton application LocalConnect</h2>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-3 py-2">
          <Search className="h-4 w-4 text-slate-500" />
          <input className="w-44 bg-transparent text-sm outline-none placeholder:text-slate-400" placeholder="Recherche rapide" />
        </div>

        <button className="rounded-2xl border border-slate-200 p-2.5 text-slate-600 hover:bg-slate-50">
          <Bell className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-3 rounded-2xl bg-slate-900 px-4 py-2 text-white">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 font-semibold">A</div>
          <div>
            <p className="text-sm font-semibold">Admin LocalConnect</p>
            <p className="text-xs text-slate-300">Super Admin</p>
          </div>
          <LogOut className="h-4 w-4" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;