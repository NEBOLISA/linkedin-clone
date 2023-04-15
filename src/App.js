import React, { useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./Feed";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Login from "./Login";
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { firebaseApp } from "./firebase";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth(firebaseApp);
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  return (
    <div className="app">
      {/* Header*/}

      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app_body">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
