import React, { useEffect, useState } from "react";
import "./foto.css";
import Fade from "react-reveal/Fade";
import { FiX } from "react-icons/fi";
import Axios from "axios";
import { useParams } from "react-router-dom";

const FotoTm1 = () => {
  const [multipleFiles, setMultipleFiles] = useState([]);
  const [gambar, setGambar] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");

  const { id } = useParams();

  const getImg = (filePath) => {
    setTempImgSrc(filePath);
    setGambar(true);
  };

  useEffect(() => {
    Axios.get(`http://e-undangan.netlify.app/api/post/${id}`)
      .then((res) => {
        setMultipleFiles(res.data.data.files);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, [id]);


  return (
    <>
      <div className={gambar ? "model open" : "model"}>
        <img src={`http://e-undangan.netlify.app/${tempimgSrc}`} alt="wkkw" />
        <FiX onClick={() => setGambar(false)} />
      </div>
      <div className="gallery">
        {multipleFiles.map((file, index) => {
          return (
            <div
              className="pics"
              onClick={() => getImg(file.filePath)}
              key={index}
            >
              <Fade bottom>
                <img
                  alt="wkwk"
                  src={`http://e-undangan.netlify.app/${file.filePath}`}
                  style={{ width: "100%" }}
                />
              </Fade>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FotoTm1;
