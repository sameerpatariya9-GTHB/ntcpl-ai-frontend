import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CataloguePage from "../pages/CataloguePage";
import LoginPage from "../pages/LoginPage";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRouter() {
  return (
    <Routes>

      {/* Login Page */}
      <Route path="/login" element={<LoginPage />} />

      {/* Everything else requires login */}
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="catalogue" element={<CataloguePage />} />
      </Route>

    </Routes>
  );
}

export default AppRouter;