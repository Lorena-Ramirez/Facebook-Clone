import React from 'react';
import Story from '../Story/Story';
import "./StoryReel.css";


function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://www.michigan.org/sites/default/files/styles/15_6_desktop/public/DM.ss_.18_Isle%20Royale%20National%20Park_Hiking%2009_Drew.Mason_.jpg?itok=sTeKHKxa&timestamp=1614630122"
        profileSrc="https://avatars3.githubusercontent.com/u/30196405?s=460&u=6bd3c8280b827a0ea3f661fc7c0c65117b19bc61&v=4"
        title="Landon Miller"
      />
      <Story
        image="https://i.pinimg.com/originals/b4/56/67/b4566743fcc172851fbe3211d23e78f0.jpg"
        profileSrc="https://images.summitmedia-digital.com/cosmo/images/2020/04/15/best-selfie-poses-14-andrea-brillantes-1586944317.jpg"
        title="Jessica Walker"
      />
      <Story
        image="https://cdn.cliqueinc.com/posts/270318/tips-for-instagram-selfie-likes-270318-1540174901636-promo.700x0c.jpg"
        profileSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKpPmc-yY_OZMHWXesDlhFpyIuiQvMg6QaSg&usqp=CAU"
        title="Peyton Williams"
      />
      <Story
        image="https://doggierescue.com/wp-content/uploads/2021/02/Walking5-scaled.jpg"
        profileSrc="https://i.pinimg.com/236x/c6/c2/23/c6c223539305e0f418f94a2fa28fc451.jpg"
        title="Elena Ramirez"
      />
      <Story
        image="https://i.pinimg.com/564x/f4/ec/12/f4ec12581a9558e9248383bddb043a9c.jpg"
        profileSrc="https://i.pinimg.com/564x/5e/1d/a5/5e1da51b68ed8c8f93f6a29366c1022c.jpg"
        title="Devon Mcbroom"
      />
    </div>
  )
}

export default StoryReel;
