import { MdClose, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import React, { useState } from "react";
import "../gallery.css";
import InImageData from "../inImagedata";
import TitleBar from "./titleBar";
import AppPagination from "./AppPagination";

const InDoorGallery = () => {
  const [image, setImage] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [currentImage, setCurrentImage] = useState(1);
  const length = InImageData.length;

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setImage(true);
  };

  const nextImage = () => {
    setCurrentImage(currentImage === length ? 1 : currentImage + 1);
    const currentSrc = findImageById(currentImage);
    if (currentSrc) {
      setTempImgSrc(currentSrc);
    }
  };

  const prevImage = () => {
    setCurrentImage(currentImage === 1 ? length : currentImage - 1);
    const currentSrc = findImageById(currentImage);

    if (currentSrc) {
      setTempImgSrc(currentSrc);
    }
  };

  const findImageById = (id) => {
    const img = InImageData.find((img) => img.id === id);
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
          {InImageData.map((item, index) => {
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
          <div className={image ? "image open" : "image"}>
            <MdArrowBackIosNew className="back" onClick={prevImage} />
            <img src={tempImgSrc} />
            <MdClose className="close" onClick={() => setImage(false)} />
            <MdArrowForwardIos className="next" onClick={nextImage} />
          </div>
        </div>
      </div>
      <div className="pagi">
        <AppPagination />
      </div>
    </>
  );
};

export default InDoorGallery;
