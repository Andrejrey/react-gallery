import {MdClose, MdArrowBackIosNew, MdArrowForwardIos} from "react-icons/md";
import React, {useState} from "react";
import OutImageData from "../outImageData";
import TitleBar from "./titleBar";
import "../gallery.css";
import AppPagination from "./AppPagination";

const OutDoorGallery = (imgSrc) => {
	const [image, setImage] = useState(false);
	const [tempImg, setTempImg] = useState("");
	const [currentImageId, setCurrentImageId] = useState(1);
	const length = OutImageData.length;

	const getImg = (img) => {
		setCurrentImageId(img.id)
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
		return OutImageData.find((img) => img.id === id);
	};

	let btnPrev = (currentImageId > 1)  ? <MdArrowBackIosNew className="back" onClick={prevImage} /> : '',
		btnNext = (currentImageId < length) ? <MdArrowForwardIos className="next" onClick={nextImage} /> : '';

	return (
		<>
			<TitleBar/>
			<div className="gallery">
				<div className="allimg">
					{
						OutImageData.map(item => {
							return (
								<div
									className="img"
									key={item.id}
									onClick={() => getImg(item)}
								>
									<img src={item.imgSrc}/>
									<div className="info">{item.id}</div>
								</div>
							);
						})
					}
				</div>
			</div>
			<div className={image ? "image open" : "image"}>
				{ btnPrev }
				<img src={tempImg.imgSrc} title={currentImageId} alt={currentImageId} />
				<MdClose className="close" onClick={() => setImage(false)} />
				{ btnNext }
			</div>
			<div className="pagi">
				<AppPagination/>
			</div>
		</>
	);
};

export default OutDoorGallery;
