import { BrowserRouter } from "react-router-dom";
import AppRouter from "./router/AppRouter";
import LoginPage from "./pages/LoginPage";

function App() {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      {token ? <AppRouter /> : <LoginPage />}
    </BrowserRouter>
  );
}

export default App;