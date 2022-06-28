import * as React from "react";
import "./template.css";
import { useState, useEffect, useRef } from "react";
import img1 from "./osaka/1.jpeg";
import img2 from "./osaka/2.jpg";
import img3 from "./osaka/3.jpg";
import img4 from "./osaka/4.jpg";
import img5 from "./osaka/5.jpg";
import img6 from "./osaka/6.jpg";
import img7 from "./osaka/7.jpg";
import img8 from "./osaka/8.jpg";
import img9 from "./osaka/9.jpg";
import img10 from "./osaka/10.jpg";
import img11 from "./osaka/11.jpg";
import img12 from "./osaka/12.jpg";
import img13 from "./osaka/13.jpg";
import img14 from "./osaka/14.jpg";
import img15 from "./osaka/15.jpg";
import img16 from "./osaka/16.jpeg";
import img17 from "./osaka/17.jpeg";
import img18 from "./osaka/18.jpeg";
import img19 from "./osaka/19.jpg";
import img20 from "./osaka/20.jpg";
import img21 from "./osaka/21.jpg";
import img22 from "./osaka/22.jpg";
import img23 from "./osaka/23.jpg";
import CloseIcon from "@mui/icons-material/Close";

function Japan() {
  let data = [
    {
      id: 1,
      imgSrc: img21,
      imgT: "Kiyomizu-dera",
    },
    {
      id: 15,
      imgSrc: img15,
      imgT: "Osaka",
      
    },
    {
      id: 3,
      imgSrc: img3,
      imgT: "Osaka Castle",
    },
    {
      id: 4,
      imgSrc: img5,
      imgT: "Osaka",
    },
    {
      id: 5,
      imgSrc: img4,
      imgT: "Osaka",
    },
    {
      id: 9,
      imgSrc: img9,
      imgT: "Osaka Metro",
    },
    {
      id: 7,
      imgSrc: img18,
      imgT: "Golden Pavilion",
    },
    {
      id: 8,
      imgSrc: img11,
      imgT: "Ichiran",
    },
    {
      id: 10,
      imgSrc: img10,
      imgT: "Osaka Metro",
    },
    {
      id: 11,
      imgSrc: img8,
      imgT: "Osaka Metro",
    },
    {
      id: 12,
      imgSrc: img12,
      imgT: "Shinsaibashi",
    },
    {
      id: 6,
      imgSrc: img6,
      imgT: "Tsūtenkaku",
    },
    {
      id: 14,
      imgSrc: img14,
      imgT: "Osaka",
    },
    {
      id: 2,
      imgSrc: img16,
      imgT: "Torii",
    },
    {
      id: 16,
      imgSrc: img2,
      imgT: "Osaka",
    },
    {
      id: 17,
      imgSrc: img17,
      imgT: "Torii",
    },
    {
      id: 18,
      imgSrc: img7,
      imgT: "Osaka Metro",
    },
    {
      id: 19,
      imgSrc: img13,
      imgT: "Osaka",
    },
    {
      id: 20,
      imgSrc: img20,
      imgT: "Kiyomizu-dera",
    },
    {
      id: 21,
      imgSrc: img1,
      imgT: "Osaka Universal Studios",
    },
    {
      id: 22,
      imgSrc: img22,
      imgT: "Kiyomizu-dera",
    },
    {
      id: 23,
      imgSrc: img23,
      imgT: "Torii",
    },
    {
      id: 32,
      imgSrc: img19,
      imgT: "Hokan-ji Temple",
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
 

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!imgRef.current.contains(e.target)) {
        setModel(false);
      }
    });
  });

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} alt=""></img>
        <CloseIcon onClick={() => setModel(false)}></CloseIcon>
      </div>
      <div className="temp_container">
        <div className="gallery">
          {data.map((item, index) => {
            return (
              <div
                className="pics"
                key={index}
                ref={imgRef}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} alt="" className="pics-img" />
                <p>{item.imgT}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Japan;
