import React from "react";
import "./Styles/Header.css";
import SearchIcon from "@mui/icons-material/Search";
import logo from "./Assets/Imgs/logo.png";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@mui/icons-material/Home";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice";
import { signOut, getAuth } from "firebase/auth";
import { firebaseApp } from "./firebase";
import { Avatar } from "@material-ui/core";
//https://pbs.twimg.com/profile_images/1129141174500024320/YSCayTg8_400x400.jpg"
function Header() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const auth = getAuth(firebaseApp);
  const logoutOfApp = () => {
    dispatch(logout());
    signOut(auth);
  };
  return (
    <div className="header">
      <div className="header_left">
        <img src={logo} alt="" />
        <div className="header_search">
          <SearchIcon />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Chats" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        <HeaderOption
          onClick={logoutOfApp}
          avater={user.photoUrl ? user.photoUrl : <Avatar />}
          title="me"
          user={user}
        />
      </div>
    </div>
  );
}

export default Header;
