import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io"

function Header() {
  return (
    <header className="text-center d-flex justify-content-between py-0 ">
      <p className="display-6 text-white ">Chats</p>
      <p className="text-white text-center lead mb-0">
        <img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" style={{width:'30px',height:'30px'}}/>
       <span className="px-2">thewokrblunt.rariko</span> 
        <button className="btn" style={{ backgroundColor: "pink" }}><IoMdNotificationsOutline /></button>
      </p>

    </header>
  );
}

export default Header;
