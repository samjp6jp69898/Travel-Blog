import * as React from "react";
import "./template.css";
import { useState, useEffect, useRef } from "react";
import img1 from "./Taiwan/1.jpg";
import img2 from "./Taiwan/2.jpeg";
import img3 from "./Taiwan/3.jpeg";
import img4 from "./Taiwan/4.jpeg";
import img5 from "./Taiwan/5.jpg";
import img6 from "./Taiwan/6.jpg";
import img7 from "./Taiwan/7.jpg";
import img8 from "./Taiwan/8.jpg";
import img9 from "./Taiwan/9.jpg";
import img10 from "./Taiwan/10.jpg";
import img11 from "./Taiwan/11.jpg";
import img12 from "./Taiwan/12.jpg";
import img13 from "./Taiwan/13.jpg";
import img14 from "./Taiwan/14.jpg";
import img15 from "./Taiwan/15.jpg";
import img16 from "./Taiwan/16.jpg";
import img17 from "./Taiwan/17.jpg";
import CloseIcon from "@mui/icons-material/Close";

function Taiwan() {
  let data = [
    {
      id: 2,
      imgSrc: img3,
      imgT: "Taiwan",
    },
    {
      id: 3,
      imgSrc: img16,
      imgT: "Taiwan",
    },
    {
      id: 4,
      imgSrc: img5,
      imgT: "Taiwan",
    },
    {
      id: 5,
      imgSrc: img4,
      imgT: "Taiwan",
    },
    {
      id: 9,
      imgSrc: img9,
      imgT: "Taiwan",
    },
    {
      id: 8,
      imgSrc: img11,
      imgT: "Taiwan",
    },
    {
      id: 10,
      imgSrc: img10,
      imgT: "Taiwan",
    },
    {
      id: 11,
      imgSrc: img8,
      imgT: "Taiwan",
    },
    {
      id: 12,
      imgSrc: img12,
      imgT: "Taiwan",
    },
    {
      id: 6,
      imgSrc: img17,
      imgT: "Taiwan",
    },
    {
      id: 14,
      imgSrc: img14,
      imgT: "Taiwan",
    },
    {
      id: 15,
      imgSrc: img2,
      imgT: "Taiwan",
    },
    {
      id: 16,
      imgSrc: img15,
      imgT: "Taiwan",
    },
    {
      id: 17,
      imgSrc: img6,
      imgT: "Taiwan",
    },
    {
      id: 18,
      imgSrc: img7,
      imgT: "Taiwan",
    },
    {
      id: 19,
      imgSrc: img13,
      imgT: "Taiwan",
    },
    {
      id: 21,
      imgSrc: img1,
      imgT: "Taiwan",
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

export default Taiwan;
