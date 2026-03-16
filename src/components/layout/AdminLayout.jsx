import React from 'react';
import { LayoutDashboard, Store, MessageSquare, LogOut, ShieldCheck } from 'lucide-react';

const AdminLayout = ({ children, activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Tableau de bord', icon: LayoutDashboard },
    { id: 'students', label: 'Validation Étudiants', icon: ShieldCheck },
    { id: 'merchants', label: 'Commerçants', icon: Store },
    { id: 'reviews', label: 'Modération Avis', icon: MessageSquare },
  ];

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* SIDEBAR */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6 border-b flex items-center gap-2">
           <div className="w-8 h-8 bg-orange-500 rounded-lg"></div>
           <span className="text-xl font-bold text-gray-800">LocalConnect</span>
        </div>
        <nav className="mt-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 px-6 py-4 transition-colors ${
                activeTab === item.id ? 'bg-orange-50 text-orange-600 border-r-4 border-orange-500' : 'text-gray-500 hover:bg-gray-50'
              }`}
            >
              <item.icon size={20} />
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      {/* CONTENU PRINCIPAL */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="h-16 bg-white border-b flex items-center justify-between px-8">
          <h2 className="text-xl font-semibold text-gray-700 capitalize">{activeTab}</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500">Admin: Sophie</span>
            <button className="p-2 text-gray-400 hover:text-red-500"><LogOut size={20} /></button>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;