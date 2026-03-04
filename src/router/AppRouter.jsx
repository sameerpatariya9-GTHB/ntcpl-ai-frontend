import { Routes, Route, Navigate } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CataloguePage from "../pages/CataloguePage";
import LoginPage from "../pages/LoginPage";

function AppRouter() {

  const token = localStorage.getItem("token");

  // Force login if no token
  if (!token) {
    return <LoginPage />;
  }

  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
      </Route>

      <Route path="/login" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;