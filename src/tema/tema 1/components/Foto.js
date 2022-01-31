import React, { useState } from "react";
import "./foto.css";
import { FiX } from "react-icons/fi";
import Fade from "react-reveal/Fade";
import { GalleyPhotoPersonal } from "../../../utils";


const Foto = () => {
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <FiX onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {GalleyPhotoPersonal.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <Fade bottom>
                <img src={item.imgSrc} style={{ width: "100%" }} />
              </Fade>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Foto;
