import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import GlobalStyle from "./GlobalStyles";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import LandindPage from "./pages/LandingPage";



export default function App() {

  const token = localStorage.getItem("token");

  return (
    <>
      <AuthProvider>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={(token) ? <Dashboard/> : <LandindPage />} />
            <Route path="/auth" element={<Auth />} />
            <Route
                  path="/dashboard"
                  element={
                    <ProtectedRouteGuard>
                      <Dashboard />
                    </ProtectedRouteGuard>
                  }
                ></Route>
          </Routes>
        </Router>
      </AuthProvider>
    </>
  );
}

function ProtectedRouteGuard({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/auth" />;
  }

  return <>{children}</>;
}
