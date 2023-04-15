import React, { useEffect, useState } from "react";
import "./Styles/Feed.css";
import ImageIcon from "@mui/icons-material/Image";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Posts from "./Posts";
import { db } from "./firebase";
import FlipMove from "react-flip-move";

import {
  collection,
  getDocs,
  addDoc,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timeStamp", "desc"));
    const getPosts = async () => {
      await getDocs(q).then((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    };

    getPosts();
  }, [posts]);

  const sendPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        name:
          user.displayName.charAt(0).toUpperCase() +
          user.displayName.slice(1).split(" ")[0] +
          " " +
          user.displayName.split(" ")[1].charAt(0).toUpperCase() +
          user.displayName.split(" ")[1].slice(1),
        description: "this is for testing",
        message: input,
        photoUrl: user.photoUrl,
        timeStamp: serverTimestamp(),
      });
    } catch (e) {
      console.log("error adding to forebase", e);
    }
    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOption">
          <InputOptions Icon={ImageIcon} title="Photos" color="#70b5f9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#e7a33e"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#c0cbcd" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7fc15e"
          />
        </div>
      </div>
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Posts
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
