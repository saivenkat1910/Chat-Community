import React from "react";

function CommunityChat(props) {
  return ( <div >
     <a class="list-group-item list-group-item-action active text-white rounded-0" style={{borderLeft:"none",borderRight:"none",borderBottom:"solid 1px",borderBottomColor:"blueviolet",backgroundColor:"#040720"}}>
                <div class="media d-flex"><img src={props.src} alt="user" width="50" class="rounded-circle"/>
                  <div class="media-body ml-4">
                    <div class="d-flex align-items-center justify-content-between mb-1">
                      <h6 class="mb-0">{props.title}</h6><small class="small font-weight-bold">{props.time}</small>
                    </div>
                    <p class="font-italic mb-0 text-small">{props.msg}</p>
                  </div>
                </div>
              </a>
  </div>
    
  );
}

export default CommunityChat;
