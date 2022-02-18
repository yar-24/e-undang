import React, { useState } from "react";
import "./fotoTm2.css";
import Fade from "react-reveal/Fade";
import { FiX } from "react-icons/fi";
import { GalleyPhotoPersonal } from '../../../../../utils/galeri';

const FotoTm2 = () => {
  const [gambar, setGambar] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setGambar(true);
  };

  return (
    <>
      <div className={gambar ? "model open" : "model"}>
        <img src={tempimgSrc} alt="wkkw" />
        <FiX onClick={() => setGambar(false)} />
      </div>
      <div className="gallery">
        {GalleyPhotoPersonal.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <Fade top>
                <img alt={item.alt} src={item.imgSrc} style={{ width: "100%" }} />
              </Fade>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FotoTm2;
