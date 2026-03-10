import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";

// Placeholder dashboard (you can replace later)
function Dashboard() {
  return (
    <div style={{ padding: "40px", fontSize: "20px" }}>
      Welcome to NTCPL AI Dashboard
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Default route → Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Explicit login route */}
        <Route path="/login" element={<LoginPage />} />

        {/* Example protected page */}
        <Route path="/dashboard" element={<Dashboard />} />

        {/* Catch unknown routes */}
        <Route path="*" element={<Navigate to="/login" />} />

      </Routes>
    </BrowserRouter>
  );
}