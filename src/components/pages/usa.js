import * as React from "react";
import "./template.css";
import { useState, useEffect, useRef } from "react";
import img1 from "./seattle/1.jpeg";
import img2 from "./seattle/2.jpeg";
import img3 from "./seattle/3.jpg";
import img4 from "./seattle/4.jpeg";
import img5 from "./seattle/5.jpeg";
import img6 from "./seattle/6.jpeg";
import img7 from "./seattle/7.jpeg";
import img8 from "./seattle/8.jpeg";
import img9 from "./seattle/9.jpg";
import img10 from "./seattle/10.jpg";
import img11 from "./seattle/11.jpg";
import img12 from "./seattle/12.jpg";
import img13 from "./seattle/13.jpg";
import img14 from "./seattle/14.jpeg";
import img15 from "./seattle/15.jpeg";
import img16 from "./seattle/16.jpeg";
import img17 from "./seattle/17.jpeg";
import img18 from "./seattle/18.jpg";
import img19 from "./seattle/19.jpeg";
import CloseIcon from "@mui/icons-material/Close";


function USA() {
  let data = [
    {
      id: 1,
      imgSrc: img1,
      imgT: "Seattle",
    },
    {
      id: 2,
      imgSrc: img2,
      imgT: "Oylimpia",
    },
    {
      id: 3,
      imgSrc: img3,
      imgT: "Seattle Waterfront",
    },
    {
      id: 4,
      imgSrc: img5,
      imgT: "Boiling Point",
    },
    {
      id: 5,
      imgSrc: img4,
      imgT: "Grenn Lake Park",
    },
    {
      id: 9,
      imgSrc: img9,
      imgT: "LA Universal Studios Hollywood",
    },
    {
      id: 7,
      imgSrc: img7,
      imgT: "University of Washington",
    },
    {
      id: 8,
      imgSrc: img11,
      imgT: "LA City Hall",
    },
    {
      id: 10,
      imgSrc: img10,
      imgT: "LA Universal Studios Hollywood",
    },

    {
      id: 11,
      imgSrc: img8,
      imgT: "Pike Market",
    },
    {
      id: 12,
      imgSrc: img12,
      imgT: "LA Universal Studios Hollywood",
    },
    {
      id: 6,
      imgSrc: img6,
      imgT: "Tacoma Community College",
    },
    {
      id: 14,
      imgSrc: img14,
      imgT: "Grand Central Market",
    },
    {
      id: 15,
      imgSrc: img15,
      imgT: "Grand Central Market",
    },
    {
      id: 16,
      imgSrc: img16,
      imgT: "Japantown SF",
    },
    {
      id: 17,
      imgSrc: img17,
      imgT: "Fisherman's Wharf",
    },
    {
      id: 18,
      imgSrc: img18,
      imgT: "San Francisco Brewing Co."
    },
    {
      id: 19,
      imgSrc: img13,
      imgT: "LA"
    },
    {
      id: 21,
      imgSrc: img1,
      imgT: "Seattle Waterfront",
    },
    {
      id: 32,
      imgSrc: img19,
      imgT: "SGolden Gate Bridge",
    },
  ];

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempimgSrc] = useState("");

 

  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc);
    setModel(true);
  };





  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 27) {
        setModel(false);
      }
    });
  });


  let imgRef = useRef();
 



  return (
    <>
      <div ref={imgRef} className={model ? "model open" : "model"}>
        <img  src={tempimgSrc} alt=""></img>
        <CloseIcon onClick={() => setModel(false)}></CloseIcon>
      
      </div>
      <div className="temp_container">
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div
                
                className="pics"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} alt="" className="pics-img"></img>
                
                  <p>{item.imgT}</p>
                 
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default USA;
