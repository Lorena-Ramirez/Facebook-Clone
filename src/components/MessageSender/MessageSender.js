import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { useStateValue } from '../../StateProvider';
import db from "../../firebase";
import "./MessageSender.css";
import firebase from "firebase";

import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [{ user }] = useStateValue();

  const handleSubmit = (e) => {
     e.preventDefault();

     db.collection("posts").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        profilePic: user.photoURL,
        username: user.displayName,
        image: imageUrl
     })
     setInput("");
     setImageUrl("");
  }


  return (
    <div className="messageSender">
      <div className="messageSender___top">
        <Avatar 
        src={user.photoURL}
        />
        <form>
          <input 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="messageSender___input" 
          placeholder={`What's on your mind? ${user.displayName}`}
          />

          <input 
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="image URL (Optional)"/>

          <button onClick={handleSubmit} type="submit">
            Hidden submit
          </button>
        </form>
      </div> 

      <div className="messageSender___bottom">
        <div className="messageSender___option">
          <VideocamIcon style={{ color: "red"}} />
          <h3>Live Video</h3>
        </div>

        <div className="messageSender___option">
          <PhotoLibraryIcon style={{ color: "green"}} />
          <h3>Photo/Video</h3>
        </div>

        <div className="messageSender___option">
          <InsertEmoticonIcon style={{ color: "orange"}} />
          <h3>Feeling/Activity</h3>
        </div>

      </div> 
    </div>
  )
}

export default MessageSender;
