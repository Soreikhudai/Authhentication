import { useState } from "react";
import AuthContext from "./auth-context";
const AuthProvider = (props) => {
  const [token, setToken] = useState(null);

  const userIsLoggedin = !!token;
  const loginHandler = (token) => {
    setToken(token);
  };
  const logoutHandler = () => {
    setToken(null);
  };

  const data = {
    token: token,
    isLoggedin: userIsLoggedin,
    login: loginHandler,
    logout: logoutHandler,
  };
  return (
    <AuthContext.Provider value={data}>{props.children}</AuthContext.Provider>
  );
};
export default AuthProvider;
