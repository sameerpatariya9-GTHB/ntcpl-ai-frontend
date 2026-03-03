import { Link, Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white text-gray-900">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* LOGO */}
          <Link to="/" className="text-xl font-bold tracking-tight">
            <span className="text-gray-900">NTCPL</span>
            <span className="text-blue-700">-AI</span>
          </Link>

          {/* NAV LINKS */}
          <div className="flex gap-8 text-sm font-medium">
            <Link to="/" className="hover:text-blue-700 transition">
              Home
            </Link>
            <Link to="/services" className="hover:text-blue-700 transition">
              Services
            </Link>
            <Link to="/catalogue" className="hover:text-blue-700 transition">
              Catalogue
            </Link>
          </div>

        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="pt-24">
        <Outlet />
      </main>

    </div>
  );
}

export default MainLayout;