import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import CommunityChat from "./Communitychat";
// import coummunitychatlist from "./communitychatlist";
import { RiTeamFill } from "react-icons/ri";



export const Chat = ({arr}) => {
  console.log(arr);
  return <div >
    <div className="input-group mb-3 py-2 ">
      <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="basic-addon1" style={{ backgroundColor: "grey", border: "none" }} />
      <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: "grey", border: "none" }}><BiSearch /></span>
    </div>

    <button className="btn btn-primary col-12 py-2 mb-2" style={{ backgroundColor: "blueviolet" }}><RiTeamFill />Create new coummunities</button>

    <div className="messages-box">
      <div className="list-group rounded-0">

        {arr.map(noteItem => (
          <CommunityChat
            key={noteItem.key}
            title={noteItem.title}
            msg={noteItem.msg}
            time={noteItem.time}
            src={noteItem.imagesrc}
          />
        ))}


      </div>
    </div>

  </div>
}

