import classes from "./ProfileForm.module.css";
import { useRef, useContext } from "react";
import AuthContext from "../../store/auth-context";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const navigate = useNavigate();
  const Data = useContext(AuthContext);
  const newPasswordRef = useRef("");
  const submitHandler = async (event) => {
    event.preventDefault();
    const newPassword = newPasswordRef.current.value;
    try {
      const response = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDFu8-Vjj_SFNU9d3lO4PE0uqF6xhYUqiU",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: Data.token,
            password: newPassword,
            returnSecureToken: false,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("request failed");
      }
      const data = await response.json();
      navigate("/");
      console.log(data);
    } catch (error) {
      alert("something went wrong");
      console.error(error);
    }
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
