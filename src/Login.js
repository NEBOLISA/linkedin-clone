import React, { useState } from "react";
import "./Styles/Login.css";
import logo from "./Assets/Imgs/logo2.png";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { firebaseApp } from "./firebase";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilepic] = useState("");
  const auth = getAuth(firebaseApp);
  const dispatch = useDispatch();

  const logintoApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            photoUrl: userAuth.user.photoURL,
          })
        );
      })
      .catch((error) => alert(error));
  };
  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        const user = userAuth.user;
        updateProfile(user, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        });
      })
      .catch((error) => alert(error));
  };
  return (
    <div className="login">
      <img src={logo} alt="logopic" />
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilepic(e.target.value)}
          placeholder="Profile pic URL(optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />

        <button type="submit" onClick={logintoApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?
        <span className="login_register" onClick={register}>
          {" "}
          Register Now
        </span>
      </p>
    </div>
  );
}

export default Login;
