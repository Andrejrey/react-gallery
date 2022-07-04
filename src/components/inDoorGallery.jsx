import { MdClose, MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../gallery.css";
import TitleBar from "./titleBar";
import AppPagination from "./AppPagination";

const InDoorGallery = () => {
  const [image, setImage] = useState(false);
  const [tempImg, setTempImg] = useState(null);
  const [currentImageId, setCurrentImageId] = useState(1);
  const [length, setLength] = useState();
  const [inImageData, setOutImagedata] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/indoor")
      .then(function (response) {
        // handle success
        console.log("Axios response", response);
        setOutImagedata(response.data);
        setLength(response.data.length);
        console.log(inImageData);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  const getImg = (img) => {
    setCurrentImageId(img.id);
    setTempImg(img);
    setImage(true);
  };

  const nextImage = () => {
    const id = currentImageId + 1;
    setCurrentImageId(currentImageId === length ? 1 : id);
    const current = findImageById(id);

    if (current) {
      setTempImg(current);
      console.log("next", currentImageId);
    }
  };

  const prevImage = () => {
    const id = currentImageId - 1;
    setCurrentImageId(currentImageId === 1 ? length : id);
    const current = findImageById(id);

    if (current) {
      setTempImg(current);
      console.log("prev", currentImageId);
    }
  };

  const findImageById = (id) => {
    return inImageData.find((img) => img.id === id);
  };

  let btnPrev = currentImageId > 1 ? <MdArrowBackIosNew className="back" onClick={prevImage} /> : "",
    btnNext = currentImageId < length ? <MdArrowForwardIos className="next" onClick={nextImage} /> : "",
    showImg = tempImg ? <img src={tempImg.imgSrc} title={currentImageId} alt={currentImageId} /> : "";

  return (
    <>
      <TitleBar />
      <div className="gallery">
        <div className="allimg">
          {inImageData.map((item) => {
            return (
              <div className="img" key={item.id} onClick={() => getImg(item)}>
                <img src={item.imgSrc} title={currentImageId} alt={currentImageId} />
                <div className="info">{item.id}</div>
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

export default InDoorGallery;
