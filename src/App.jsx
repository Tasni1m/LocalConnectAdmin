import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/pages/Login";
import ForgotPassword from "./components/pages/ForgotPassword";
import AdminLayout from "./components/layout/AdminLayout";
import DashboardPage from "./components/pages/DashboardPage";
import StudentsPage from "./components/pages/StudentsPage";
import StudentDetailPage from "./components/pages/StudentDetailPage";
import MerchantsPage from "./components/pages/MerchantsPage";
import ReviewsPage from "./components/pages/ReviewsPage";
import SettingsPage from "./components/pages/SettingsPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="students" element={<StudentsPage />} />
        <Route path="students/:id" element={<StudentDetailPage />} />
        <Route path="merchants" element={<MerchantsPage />} />
        <Route path="reviews" element={<ReviewsPage />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
    </Routes>
  );
}

export default App;