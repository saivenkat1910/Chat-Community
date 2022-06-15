import React, { useState } from "react";
import { Chat } from "./Chat";
import Header from "./Header";
import Page from "./Page";


export default function App() {
  // const [neww,setNeww]=useState([]);
  // function addChat(newNote) {
  //   setNeww((prevNotes) => {
  //     return [...prevNotes, newNote];
  //   });
  // }
  const [arr, setArr] = useState([
    {
      key: 1,
      title: "Polygon",
      msg: "hi its updated",
      time: "12:56",
      imagesrc: "https://lh3.googleusercontent.com/EbXw8rOdYxOGdXEFjgNP8lh-YAuUxwhOAe2jhrz3sgqvPeMac6a6tHvT35V6YMbyNvkZL4R_a2hcYBrtfUhLvhf-N2X3OB9cvH4uMw=w1064-v0"
    },
    {
      key: 2,
      title: "Discord",
      msg: "Will Do,Super,thank you",
      time: "Wed",
      imagesrc: "https://www.bing.com/th?id=OIP.pcypfjhK2bGLsLu83ju5KwHaHk&w=150&h=153&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    },
    {
      key: 3,
      title: "Bored Ape yacth club",
      msg: "qwery hiuguyg gygyugyguuu hgyuguyg ",
      time: "Tue",
      imagesrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSmM7p1U3V1Xkkdxye_6Jnl0aNCpTgbAPgAg&usqp=CAU"
    },
    {
      key: 4,
      title: "Spotify",
      msg: "hi its updated to new version",
      time: "12 Jun",
      imagesrc: "https://www.bing.com/th?id=OIP.HDjVtfc0OMmH2yPJw-dp_gHaFp&w=150&h=114&c=8&rs=1&qlt=90&o=6&dpr=1.25&pid=3.1&rm=2"
    },
    {
      key:5,
      title:"Polygon4",
      msg:"hi its updated",
      time:"10 Jun",
      imagesrc:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKJ-0369pe21LK5W22ye70-e2eNfa9wwhDw&usqp=CAU"
  },
  {
      key:6,
      title:"Polygon4",
      msg:"hi its updated",
      time:"11 May",
      imagesrc:"http://store-images.s-microsoft.com/image/apps.48154.13661098843479326.67888073-ef37-4762-a461-19598d31042e.c982a87d-20eb-4f54-b95e-f6d05f04c526"
  },
  {
      key:7,
      title:"Polygon4",
      msg:"hi its updated",
      time:"1 Feb",
      imagesrc:"https://img.fortawesome.com/1ce05b4b/start-illustration.svg"
  },
  {
      key:8,
      title:"Polygon4",
      msg:"hi its updated",
      time:"12 Jan",
      imagesrc:"https://bootstrapious.com/i/snippets/sn-chat/avatar.svg"
  }

  ]);
  // console.log(arr);

  const fun = (val) => {
    val = { key: arr.length + 1, ...val };
    // console.log(val
    let arr1 = arr;
    arr1.push(val);
    setArr(arr1);
    console.log(arr, "Changed array");
  }
  return <div className="container py-5 px-4">
    <Header />
    <div className="row justify-content-around px-4 py-3 mb-3" style={{border:"1px solid black",marginTop:"25px"}}>
      <div className="col-4  ">
        <Chat arr={arr}/>
      </div>

      <div className="col-8 ">
        <Page fun={fun} />
      </div>

    </div>
  </div>
}