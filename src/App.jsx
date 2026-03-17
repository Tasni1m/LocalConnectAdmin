import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login";
import ForgotPassword from "./components/pages/ForgotPassword";
import AdminLayout from "./components/layout/AdminLayout";
import DashboardPage from "./components/pages/DashboardPage";
import StudentsPage from "./components/pages/StudentsPage";
import MerchantsPage from "./components/pages/MerchantsPage";
import ReviewsPage from "./components/pages/ReviewsPage";
import SettingsPage from "./components/pages/SettingsPage";
import StudentDetailPage from "./components/pages/StudentDetailPage";
import {
  kpis,
  students,
  merchants,
  reviews,
  categories,
  admins,
} from "./components/data/mockData";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage kpis={kpis} />} />
        <Route path="students" element={<StudentsPage students={students} />} />
              <Route path="students/:id" element={<StudentDetailPage students={students} />} />

        <Route path="merchants" element={<MerchantsPage merchants={merchants} />} />
        <Route path="reviews" element={<ReviewsPage reviews={reviews} />} />
        <Route
          path="settings"
          element={<SettingsPage categories={categories} admins={admins} />}
        />
      </Route>
    </Routes>
  );
}

export default App;