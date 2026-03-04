import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CataloguePage from "../pages/CataloguePage";
import LoginPage from "../pages/LoginPage";

function AppRouter() {
  return (
    <Routes>

      <Route path="/login" element={<LoginPage />} />

      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
      </Route>

    </Routes>
  );
}

export default AppRouter;