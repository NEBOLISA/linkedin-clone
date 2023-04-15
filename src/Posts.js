import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOptions from "./InputOptions";
import "./Styles/Posts.css";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import ShortcutOutlinedIcon from "@mui/icons-material/ShortcutOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
const Posts = forwardRef(({ name, description, message, photoUrl }, ref) => {
  return (
    <div ref={ref} className="posts">
      <div className="post_header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post_info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post_body">
        <p>{message}</p>
      </div>
      <div className="post_buttons">
        <InputOptions Icon={ThumbUpAltOutlinedIcon} title="Like" color="gray" />
        <InputOptions Icon={ChatOutlinedIcon} title="Comment" color="gray" />
        <InputOptions Icon={ShortcutOutlinedIcon} title="Share" color="gray" />
        <InputOptions Icon={SendOutlinedIcon} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Posts;
