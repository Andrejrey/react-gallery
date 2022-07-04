import { MdClose, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import React, { useState, useEffect } from "react";
import axios from "axios";
import TitleBar from "./titleBar";
import "../gallery.css";
import AppPagination from "./AppPagination";

const OutDoorGallery = (imgSrc) => {
  const [image, setImage] = useState(false);
  const [tempImg, setTempImg] = useState(null);
  const [currentImageId, setCurrentImageId] = useState(0);
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
    setCurrentImageId(index);
    setTempImg(img);
    setImage(true);
  };

  const nextImage = () => {
    const id = currentImageId + 1;
    setCurrentImageId(currentImageId === length ? 0 : id);
    const current = findImageById(id);

    if (current) {
      setTempImg(current);
      console.log("next", currentImageId);
    }
  };

  const prevImage = () => {
    const id = currentImageId - 1;
    setCurrentImageId(currentImageId === 0 ? length : id);
    const current = findImageById(id);

    if (current) {
      setTempImg(current);
      console.log("prev", currentImageId);
    }
  };

  const findImageById = (id) => {
    return outImageData.find((img) => img.id === id);
  };

  let btnPrev = currentImageId > 1 ? <MdArrowBackIosNew className="back" onClick={prevImage} /> : "",
    btnNext = currentImageId < length ? <MdArrowForwardIos className="next" onClick={nextImage} /> : "",
    showImg = tempImg ? <img src={tempImg.imgSrc} title={currentImageId} alt={currentImageId} /> : "";

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
