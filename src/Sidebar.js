import { Avatar } from "@mui/material";
import React from "react";
import "./Styles/Sidebar.css";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Sidebar() {
  const user = useSelector(selectUser);
  const name = user.displayName;

  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://images.unsplash.com/photo-1464618663641-bbdd760ae84a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2Vic2l0ZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8&w=1000&q=80"
          alt=""
        />
        <Avatar className="sidebar_avatar" src={user.photoUrl}>
          {" "}
          {user.email[0]}
        </Avatar>

        <h2>
          {name &&
            name.charAt(0).toUpperCase() +
              name.slice(1).split(" ")[0] +
              " " +
              name.split(" ")[1].charAt(0).toUpperCase() +
              name.split(" ")[1].slice(1)}
        </h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">2,543</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">2,488</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
