
import './App.css'
import Sidebar from "./components/layout/Sidebar";
import Navbar from "./components/layout/Navbar";
import DashboardPage from "./components/pages/DashboardPage";
import StudentsPage from "./components/pages/StudentsPage";
import MerchantsPage from "./components/pages/MerchantsPage";
import ReviewsPage from "./components/pages/ReviewsPage";
import SettingsPage from "./components/pages/SettingsPage";
import {
  navItems,
  kpis,
  students,
  merchants,
  reviews,
  categories,
  admins,
} from "./components/data/mockData";

function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[280px_1fr]">
        <Sidebar items={navItems} />

        <main className="space-y-8 p-4 md:p-6 lg:p-8">
          <Navbar />
          <DashboardPage kpis={kpis} />
          <StudentsPage students={students} />
          <MerchantsPage merchants={merchants} />
          <ReviewsPage reviews={reviews} />
          <SettingsPage categories={categories} admins={admins} />
        </main>
      </div>
    </div>
  );
}


export default App
