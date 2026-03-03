import { Routes, Route } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import HomePage from "../pages/HomePage";
import ServicesPage from "../pages/ServicesPage";
import CataloguePage from "../pages/CataloguePage";

function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/catalogue" element={<CataloguePage />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;