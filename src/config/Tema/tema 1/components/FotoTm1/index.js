import React, { useEffect, useState } from "react";
import "./foto.css";
import Fade from "react-reveal/Fade";
import { FiX } from "react-icons/fi";
import { useSelector } from "react-redux";
import Loading from "react-loading";
import { FormGaleriMusik } from "../../../../../componentsApp";

const FotoTm1 = ({galeri}) => {
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [gambar, setGambar] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const {isLoading } = useSelector((state) => state.goals);

  const getImg = (filePath) => {
    setTempImgSrc(filePath);
    setGambar(true);
  };

  // useEffect(() => {
  //   setMultipleFiles(goals[0].files);
  // }, [goals]);

  return (
    <>
      {isLoading ? (
        <Loading type={"spin"} color={"#fff"} height={667} width={375} />
      ) : (
        <div>
          <div className={gambar ? "model open" : "model"}>
            <img src={tempimgSrc} alt="wkkw" />
            <FiX onClick={() => setGambar(false)} />
          </div>
          <div className="gallery">
            {galeri.files?.map((file, index) => {
              return (
                <div
                  className="pics"
                  onClick={() => getImg(file.url)}
                  key={index}
                >
                  <Fade bottom>
                    <img alt="wkwk" src={file.url} style={{ width: "100%" }} />
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default FotoTm1;
