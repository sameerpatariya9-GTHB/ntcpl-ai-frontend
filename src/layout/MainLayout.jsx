import { Outlet, Navigate } from "react-router-dom";

function MainLayout() {

  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default MainLayout;