import React from "react";
import "./Styles/HeaderOption.css";
import { Avatar } from "@material-ui/core";

function HeaderOption({ avater, title, Icon, onClick, user }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      {avater && <Avatar className="headerOption_icon" src={avater} />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
