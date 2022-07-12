import { MdClose, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TitleBar from "./titleBar";
import "../gallery.css";
import AppPagination from "./AppPagination";

const OutDoorGallery = (imgSrc) => {
  const [image, setImage] = useState(false);
  const [tempImg, setTempImg] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [length, setLength] = useState();
  const [outImageData, setOutImagedata] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/outdoor")
      .then(function (response) {
        // handle success
        console.log("Axios response", response);
        setOutImagedata(response.data);
        setLength(response.data.length);
        console.log(outImageData);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const getImg = (img, index) => {
    setCurrentImageIndex(index);
    setTempImg(img);
    setImage(true);
  };

  const nextImage = () => {
    const index = currentImageIndex + 1;
    setCurrentImageIndex(currentImageIndex === length ? 0 : index);
    const current = findImageByIndex(index);

    if (current) {
      setTempImg(current);
      console.log("next", currentImageIndex);
    }
  };

  const prevImage = () => {
    const index = currentImageIndex - 1;
    setCurrentImageIndex(currentImageIndex === 0 ? length : index);
    const current = findImageByIndex(index);

    if (current) {
      setTempImg(current);
      console.log("prev", currentImageIndex);
    }
  };

  const findImageByIndex = (index) => {
    return outImageData.find((img, i) => i === index);
  };

  let btnPrev = currentImageIndex > 0 ? <MdArrowBackIosNew className="back" onClick={prevImage} /> : "",
    btnNext = currentImageIndex < (length - 1) ? <MdArrowForwardIos className="next" onClick={nextImage} /> : "",
    showImg = tempImg ? <img src={tempImg.imgSrc} title={currentImageIndex} alt={currentImageIndex} /> : "";

  return (
    <>
      <TitleBar />
      <div className="gallery">
        <div className="allimg">
          {outImageData.map((item, index) => {
            return (
              <div className="img" key={index} onClick={() => getImg(item, index)}>
                <img src={item.imgSrc} title={index} alt={index} />
              </div>
            );
          })}
        </div>
      </div>
      <div className={image ? "image open" : "image"}>
        {btnPrev}
        {showImg}
        <MdClose className="close" onClick={() => setImage(false)} />
        {btnNext}
      </div>
      <div className="pagi">
        <AppPagination />
      </div>
    </>
  );
};

export default OutDoorGallery;
