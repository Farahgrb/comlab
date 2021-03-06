import { useRef , useContext} from "react";
import "./login.css";
import { loginCall } from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core" ;
import { Link } from "react-router-dom";
export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user,isFetching  , dispatch} = useContext(AuthContext);

 const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user);
    return (
        <div className="login">
      <div className="loginWrapper">
        <div className="loginRight">
            <div className="logo">
            <img src="/assets/logo.png" alt="" className="logoImg" />
          <h3 className="loginLogo">Covid-lab</h3>
          </div>
          <span className="loginDesc">
            Connect to save the world.
          </span>
        </div>
        <div className="loginLeft">
          <form className="loginBox" onSubmit={handleClick}>
            <input placeholder="Email" type="email" required className="loginInput" ref={email} />
            <input placeholder="Password" type ="password" required minLength="6" className="loginInput" ref={password}/>
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ? <CircularProgress color="secondary" size="20px"/> : "Log In"}
              </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to="/register">
            <button className="loginRegisterButton">
              {isFetching ? <CircularProgress color="white" size="20px"/> : "Create a New Account"}
             
            </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
    )
}
