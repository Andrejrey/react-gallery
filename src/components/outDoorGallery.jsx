import { MdClose, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import React, { useState } from "react";
import OutImageData from "../outImageData";
import TitleBar from "./titleBar";
import "../gallery.css";
import AppPagination from "./AppPagination";

const OutDoorGallery = (imgSrc) => {
  const [image, setImage] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [currentImage, setCurrentImage] = useState(1);
  const length = OutImageData.length;

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setImage(true);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === length ? 1 : currentImage + 1);
    const currentSrc = findImageById(currentImage);

    if (currentSrc) {
      setTempImgSrc(currentSrc);
      console.log(currentSrc);
    }
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 1 ? length : currentImage - 1);
    const currentSrc = findImageById(currentImage);
    console.log(currentImage);
    if (currentSrc) {
      setTempImgSrc(currentSrc);
    }
  };

  const findImageById = (id) => {
    const img = OutImageData.find((img) => img.id === id);
    if (img) {
      return img.imgSrc;
    }
    return false;
  };

  return (
    <>
      <TitleBar />
      <div className="gallery">
        <div className="allimg">
          {OutImageData.map((item, index) => {
            return (
              <div
                className="img"
                key={index}
                onClick={() => getImg(item.imgSrc)}
              >
                <img src={item.imgSrc} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={image ? "image open" : "image"}>
        <MdArrowBackIosNew className="back" onClick={prevImage} />
        <img src={tempImgSrc} />
        <MdClose className="close" onClick={() => setImage(false)} />
        <MdArrowForwardIos className="next" onClick={nextImage} />
      </div>
      <div className="pagi">
        <AppPagination />
      </div>
    </>
  );
};

export default OutDoorGallery;
