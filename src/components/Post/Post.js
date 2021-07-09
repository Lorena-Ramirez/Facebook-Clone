import { Avatar } from '@material-ui/core';
import React from 'react';

import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import "./Post.css";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post___top">
        <Avatar
         src={profilePic}
         className="post___avatar"
        />
        <div className="post___topInfo">
          <h3>{username}</h3>
          <p>Timestamp..</p>
          {/* <p>{new Date(timestamp?.toDate()).toUTCString()}</p> */}
        </div>
      </div>

      <div className="post___bottom">
        <p>{message}</p>
      </div>

      <div className="post___image">
        <img src={image} alt="" />
      </div>

      <div className="post___options">
        <div className="post___option">
          <ThumbUpIcon />
          <p>Like</p>
        </div>

        <div className="post___option">
          <ChatBubbleOutlineIcon />
          <p>Comment</p>
        </div>

        <div className="post___option">
          <NearMeIcon />
          <p>Share</p>
        </div>

        <div className="post___option">
          <AccountCircleIcon />
          <ExpandMoreOutlined />
          <p>Account</p>
        </div>
      </div>
    </div>
  )
}

export default Post;
