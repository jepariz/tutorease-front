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
import AvatarImageChange from "./components/Dashboard/AvatarImageChange";
import Schedule from "./components/Dashboard/Schedule";
import Classes from "./components/Dashboard/Classes";
import LessonPlans from "./components/Dashboard/LessonPlans";
import Students from "./components/Dashboard/Students/Students";



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
                >
                  <Route path="avatar" element={<AvatarImageChange/>}/>
                  <Route path="schedule" element={<Schedule/>}/>
                  <Route path="students" element={<Students/>}/>
                  <Route path="classes" element={<Classes/>}/>
                  <Route path="lessons" element={<LessonPlans/>}/>
               </Route>
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
