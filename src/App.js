import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import { useContext, useEffect } from "react";
import AuthContext from "./store/auth-context";

const App = () => {
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    let logoutTimer;
    const resetLogoutTimer = () => {
      clearTimeout(logoutTimer);
      logoutTimer = setTimeout(() => {
        authCtx.logout(); // Call the logout function from your auth context
      }, 300000); // Auto logout after 3 minutes of inactivity
    };

    resetLogoutTimer();

    window.addEventListener("click", resetLogoutTimer);
    window.addEventListener("mousemove", resetLogoutTimer);
    window.addEventListener("keydown", resetLogoutTimer);

    return () => {
      window.removeEventListener("click", resetLogoutTimer);
      window.removeEventListener("mousemove", resetLogoutTimer);
      window.removeEventListener("keydown", resetLogoutTimer);
    };
  }, [authCtx]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {!authCtx.isLoggedin && (
          <Route path="/" element={<Navigate to="/auth" />} />
        )}
        {!authCtx.isLoggedin && <Route path="/auth" element={<AuthPage />} />}
        {authCtx.isLoggedin && (
          <Route path="/profile" element={<ProfilePage />} />
        )}
        {<Route path="*" element={<Navigate to="/" />} />}
      </Routes>
    </BrowserRouter>
  );
};
export default App;
