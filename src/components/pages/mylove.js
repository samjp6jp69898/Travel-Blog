import * as React from "react";
import "./template.css";
import { useState, useEffect, useRef } from "react";
import img1 from "./mylove/img-1.jpg";
import img2 from "./mylove/img-2.jpg";
import img3 from "./mylove/img-3.jpg";
import img4 from "./mylove/img-4.jpg";
import img5 from "./mylove/img-5.jpg";
import img6 from "./mylove/img-6.jpg";
import img7 from "./mylove/img-7.jpg";
import img8 from "./mylove/img-8.jpg";
import img9 from "./mylove/img-9.jpg";
import img10 from "./mylove/img-10.jpg";
import img11 from "./mylove/img-11.jpg";
import img12 from "./mylove/img-12.jpg";
import img13 from "./mylove/img-13.jpg";
import img14 from "./mylove/img-14.jpg";
import img15 from "./mylove/img-15.jpg";
import img16 from "./mylove/img-16.jpg";
import img17 from "./mylove/img-17.jpg";
import img18 from "./mylove/img-18.jpg";
import img19 from "./mylove/img-19.jpg";
import img20 from "./mylove/img-20.jpg";
import img21 from "./mylove/img-21.jpg";
import img22 from "./mylove/img-22.jpg";
import img23 from "./mylove/img-23.jpg";
import img24 from "./mylove/img-24.jpg";
import img25 from "./mylove/img-25.jpg";
import img26 from "./mylove/img-26.jpg";
import img27 from "./mylove/img-27.jpg";
import img28 from "./mylove/img-28.jpg";
import img29 from "./mylove/img-29.jpg";
import img30 from "./mylove/img-30.jpg";
import img31 from "./mylove/img-31.jpg";
import img32 from "./mylove/img-32.jpg";
import CloseIcon from "@mui/icons-material/Close";

function Mylove() {
  let data = [
    {
      id: 1,
      imgSrc: img21,
      imgT: "2022 June",
    },

    {
      id: 2,
      imgSrc: img2,
      imgT: "2021 April",
    },
    {
      id: 3,
      imgSrc: img3,
      imgT: "2021 April",
    },
    {
      id: 4,
      imgSrc: img5,
      imgT: "2021 March",
    },
    {
      id: 5,
      imgSrc: img4,
      imgT: "2021 April",
    },
    {
      id: 9,
      imgSrc: img9,
      imgT: "2021 January",
    },
    {
      id: 7,
      imgSrc: img7,
      imgT: "2021 February",
    },
    {
      id: 8,
      imgSrc: img11,
      imgT: "2021 December",
    },
    {
      id: 10,
      imgSrc: img10,
      imgT: "2021 January",
    },
    {
      id: 13,
      imgSrc: img32,
      imgT: "2021 October",
    },
    {
      id: 11,
      imgSrc: img8,
      imgT: "2021 January",
    },
    {
      id: 12,
      imgSrc: img12,
      imgT: "2021 December",
    },
    {
      id: 6,
      imgSrc: img6,
      imgT: "2021 March",
    },
    {
      id: 14,
      imgSrc: img14,
      imgT: "2021 December",
    },
    {
      id: 15,
      imgSrc: img15,
      imgT: "2021 December",
    },
    {
      id: 16,
      imgSrc: img16,
      imgT: "2021 December",
    },
    {
      id: 17,
      imgSrc: img17,
      imgT: "2021 December",
    },
    {
      id: 18,
      imgSrc: img18,
      imgT: "2022 June",
    },
    {
      id: 19,
      imgSrc: img13,
      imgT: "2021 December",
    },
    {
      id: 20,
      imgSrc: img20,
      imgT: "2022 June",
    },
    {
      id: 21,
      imgSrc: img1,
      imgT: "2021 October",
    },
    {
      id: 22,
      imgSrc: img22,
      imgT: "2022 June",
    },
    {
      id: 23,
      imgSrc: img23,
      imgT: "2022 March",
    },
    {
      id: 25,
      imgSrc: img25,
      imgT: "2022 March",
    },
    {
      id: 24,
      imgSrc: img24,
      imgT: "2022 March",
    },
    {
      id: 29,
      imgSrc: img29,
      imgT: "2021 November",
    },
    {
      id: 27,
      imgSrc: img27,
      imgT: "2021 Xmas",
    },
    {
      id: 28,
      imgSrc: img28,
      imgT: "2021 Xmas",
    },
    {
      id: 30,
      imgSrc: img30,
      imgT: "2021 October",
    },
    {
      id: 26,
      imgSrc: img26,
      imgT: "2021 Xmas",
    },
    {
      id: 31,
      imgSrc: img31,
      imgT: "2021 October",
    },
    {
      id: 32,
      imgSrc: img19,
      imgT: "2022 June",
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

export default Mylove;
