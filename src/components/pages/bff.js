import * as React from "react";
import "./template.css";
import { useState, useRef, useEffect } from "react";
import img1 from "./BFF/1.jpg";
import img2 from "./BFF/2.jpeg";
import img3 from "./BFF/3.jpg";
import img4 from "./BFF/4.jpg";
import img6 from "./BFF/6.jpg";
import img7 from "./BFF/7.jpeg";
import img8 from "./BFF/8.jpeg";
import CloseIcon from "@mui/icons-material/Close";


function BFF() {
  let data = [
    {
      id: 3,
      imgSrc: img3,
      imgT: "2019 June"
    },
    {
      id: 4,
      imgSrc: img2,
      imgT: "2019 April"
    },
    {
      id: 5,
      imgSrc: img4,
      imgT: "2019 April"
    },
    {
      id: 11,
      imgSrc: img8,
      imgT: "2017 November"
    },
    {
      id: 6,
      imgSrc: img6,
      imgT: "2019 April"
    },
    {
      id: 18,
      imgSrc: img7,
      imgT: "2019 April"
    },
    {
      id: 21,
      imgSrc: img1,
      imgT: "2017 October"
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

export default BFF;
