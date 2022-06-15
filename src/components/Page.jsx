import React, { useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import coummunitychatlist from "./communitychatlist";
import {BiImageAdd} from "react-icons/bi";
function Page({ fun }) {

    // const [community, setCommunity] = useState({
    //     title: "",
    //     description: "",
    //     url: "",
    //     address: ""
    // })
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("");
    const [address, setAddress] = useState("");

    // function handleChange(event) {
    //     const { name, value } = event.target;
    //     setCommunity((prevNote => {
    //         return { ...prevNote, [name]: value }
    //     }))
    // }

    function submitChange(event) {
        //props.onAdd(community)
        let newCommunity = {
            title: title,
            description: description,
            url: url,
            address: address
        };
        fun(newCommunity);
        event.preventDefault();
        setTitle("");
        setDescription("");
        setAddress("");
        setUrl("");
    }

    return (<div>
        <div className="col-12 justify-content-center d-flex text-white mb-4" style={{ backgroundColor: "#4b344f", borderRadius: "10px 10px 0 0" }}>
            <h3 ><RiTeamFill />Create new community</h3>
        </div>
        <form>
            {/* <div classname="mb-3">
                <BiImageAdd/>
                <input type="file" className="form-control" style={{ display:"none" }} />
            </div> */}
            <div className="mb-3">

                <input name="title" value={title} type="text" onChange={(e) => { setTitle(e.target.value) }} className=" form-control py-2 mb-2 text-white" placeholder="community Title" style={{ width: "80%" ,backgroundColor:"#352E3A"}} />
            </div>
            <div className="mb-3">
                <textarea name="description" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form  text-white" placeholder="add description" style={{backgroundColor:"#352E3A"}}/>
            </div>

            <div  className="input-group mb-3" style={{ width: "80%" ,backgroundColor:"#352E3A"}}>
                <input type="text" name="url" value={url} onChange={(e) => { setUrl(e.target.value) }} className="form-control  text-white" placeholder="Create URL" aria-label="Recipient's username" aria-describedby="basic-addon2" style={{backgroundColor:"#352E3A"}}/>
                <span  className="input-group-text text-white" id="basic-addon2" style={{ backgroundColor: "#040720" }}>.rariko.io</span>
            </div>

            <div  className="input-group mb-3 " style={{ width: "80%" }}>
                <input type="text" value={address} name="address"  onChange={(e) => { setAddress(e.target.value) }} className="form-control  text-white" placeholder="Contact addrees" style={{backgroundColor:"#352E3A"}}/>
                <button  className="btn btn-outline-secondary dropdown-toggle" style={{ width: "100px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false"><span><img src="https://bootstrapious.com/i/snippets/sn-chat/avatar.svg" style={{ height: "20px" }} /></span></button>
                <ul  className="dropdown-menu dropdown-menu-end dropp" style={{ width: "20px" }} > {coummunitychatlist.map(noteItem => (
                    <li><a  className="dropdown-item" href="#" ><span><img src={noteItem.imagesrc} style={{ height: "60px", width: "100%" }} /></span></a></li>
                ))}
                </ul>
            </div>


            <button type="submit" onClick={submitChange} className="btn btn-primary" style={{ backgroundColor: "blueviolet" }}>Lets do it</button>
        </form>
    </div>

    );
}

export default Page;
