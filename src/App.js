import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AuthContext, { AuthProvider } from "./contexts/AuthContext";
import GlobalStyle from "./GlobalStyles";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import LandindPage from "./pages/LandingPage";
import { auth } from "./configs/firebase";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<LandindPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRouteGuard>
                <Dashboard />
              </ProtectedRouteGuard>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = auth?.currentUser?.uid;

  if (!token) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
}
