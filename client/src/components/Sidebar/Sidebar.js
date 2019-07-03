import React from 'react';
import './Sidebar.scss';
import MenutItem from '../MenuItem/MenuItem';
import news from "./icons/news.svg";
import messages from "./icons/messages.svg";
import notifications from "./icons/notifications.svg";

const Sidebar = () => {
  const menus = [
    { logo: news, label: "Actualités" },
    { logo: messages, label: "Messages" },
    { logo: notifications, label: "Notifications" }
  ];

  return <>
    <div className="Sidebar">
      <div className="UserProfil mt-2">
        <img className="rounded-circle" src="https://via.placeholder.com/70" alt="User Profil" />
      </div>

      <div className="MenuItems mt-4 w-100">
        {menus.map((menu, key) => <MenutItem index={key} key={key} menu={menu} />)}
      </div>
    </div>
  </>
}

export default Sidebar;
