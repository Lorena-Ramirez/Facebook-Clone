import React, { useEffect, useState } from 'react';
import MessageSender from '../MessageSender/MessageSender';
import Post from '../Post/Post';
import StoryReel from '../StoryReel/StoryReel';
import "./Feed.css";
import db from "../../firebase"

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => { id: doc.id, data: doc.data() }))
    ))
  }, []);
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post 
      profilePic="https://www.earnthenecklace.com/wp-content/uploads/2019/12/Catherine-Paiz-Wiki-Real-Name-Age-Family-ACE-Family-Austin-McBroom-Fiance-and-Facts-To-Know.jpg"
      message="Hello beautiful developers!"
      timestamp="7/9/21"
      username="Adelina Rose"
      image="https://media.distractify.com/brand-img/43VbHx0M8/0x0/ace-family-famous-1571175043742.png"
      />
       <Post 
      profilePic="https://www.earnthenecklace.com/wp-content/uploads/2019/12/Catherine-Paiz-Wiki-Real-Name-Age-Family-ACE-Family-Austin-McBroom-Fiance-and-Facts-To-Know.jpg"
      message="Hello beautiful developers!"
      timestamp="7/9/21"
      username="Adelina Rose"
      />
      {/* <Post 
      profilePic={}
      message={}
      timestamp={}
      username={}
      image={}
      /> */}
      
    </div>
  )
}

export default Feed;
