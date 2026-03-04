import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import LoginPage from "./pages/LoginPage";

function App() {

  const token = localStorage.getItem("token");

  // If no token → show login page only
  if (!token) {
    return (
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
  }

  // If token exists → load full app
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;