import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const Data = useContext(AuthContext);
  const isLoggedin = Data.isLoggedin;
  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>Home</div>
      </Link>
      <nav>
        <ul>
          {!isLoggedin && (
            <li>
              <Link to="/auth">Login</Link>
            </li>
          )}
          {isLoggedin && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
          {isLoggedin && (
            <li>
              <button>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
