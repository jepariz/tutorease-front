import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AuthContext, { AuthProvider } from "./contexts/AuthContext";
import GlobalStyle from "./GlobalStyles";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import LandindPage from "./pages/LandingPage";

export default function App() {

  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LandindPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
