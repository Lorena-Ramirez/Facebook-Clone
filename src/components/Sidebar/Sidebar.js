import React from "react";
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import PeopleIcon from "@material-ui/icons/People";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";

function Sidebar() {
  return (
    <div className ="sidebar">
      <SidebarRow src= "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png" title="Lorena Ramirez" />
      <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlagsIcon} title ="Pages" />
      <SidebarRow Icon={PeopleIcon} title ="Friends" />
      <SidebarRow Icon={ChatIcon} title ="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title ="MarketPlace" />
      <SidebarRow Icon={VideoLibraryIcon} title ="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title ="Marketplace" />
    </div>
  )
}

export default Sidebar;
