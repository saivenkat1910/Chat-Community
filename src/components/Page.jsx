import React, { useState } from "react";
import { RiTeamFill } from "react-icons/ri";
import coummunitychatlist from "./communitychatlist";
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
        console.log(newCommunity);
        
        fun(newCommunity);
        event.preventDefault();
    }

    return (<div>
        <div className="col-12 justify-content-center d-flex text-white mb-4" style={{ backgroundColor: "blue", borderRadius: "10px 10px 0 0" }}>
            <h3 ><RiTeamFill />Create new community</h3>
        </div>
        <form>
            {/* <div classname="mb-3">
                <label><i className="fa fa-plus-circle" style={{ color: "white" }}></i></label>
                <input type="file" className="form-control" style={{ display: "none" }} />
            </div> */}
            <div className="mb-3">

                <input name="title"  type="text" onChange={(e) => { setTitle(e.target.value) }} className=" form-control py-2 mb-2" placeholder="community Title" style={{ width: "80%" }} />
            </div>
            <div className="mb-3">
                <textarea name="description"  onChange={(e) => { setDescription(e.target.value) }} className="form" placeholder="add description" />
            </div>

            <div  className="input-group mb-3" style={{ width: "80%" }}>
                <input type="text" name="url"  onChange={(e) => { setUrl(e.target.value) }} className="form-control" placeholder="Create URL" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span  className="input-group-text text-white" id="basic-addon2" style={{ backgroundColor: "#040720" }}>.rariko.io</span>
            </div>

            <div  className="input-group mb-3 " style={{ width: "80%" }}>
                <input type="text" name="address"  onChange={(e) => { setAddress(e.target.value) }} className="form-control" placeholder="Contact addrees" />
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
