import React from "react";
import {MdOutlineKeyboardBackspace, MdClose} from "react-icons/md";
import {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import OutImageData from "../outImageData";
import {Link} from "react-router-dom";

const OutdoorImages = (imgSrc) => {
	const [image, setImage] = useState(false);
	const [tempImgSrc, setTempImgSrc] = useState("");

	const getImg = (imgSrc) => {
		setTempImgSrc(imgSrc);
		setImage(true);
	};

	const [currentItems, setCurrentItems] = useState(null);
	const [pageCount, setPageCount] = useState(0);
	const [itemOffset, setItemOffset] = useState(0);
	const itemsPerPage = 6;

	useEffect(() => {
		const endOffset = itemOffset + itemsPerPage;
		setCurrentItems(imgSrc.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(imgSrc.length / itemsPerPage));
	}, [itemOffset, itemsPerPage, imgSrc]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * itemsPerPage) % imgSrc.length;
		setItemOffset(newOffset);
	};

	return (
		<>
			<div className="titlebar">
				<div className="title">{/*<h1>Outdoor Images</h1> */}</div>
				<div className="back">
					<Link to="/">
						<MdOutlineKeyboardBackspace/>
					</Link>
				</div>
			</div>
			<div className={image ? "image open" : "image"}>
				<img src={tempImgSrc}/>
				<MdClose onClick={() => setImage(false)}/>
			</div>
			<div className="gallery">
				<div className="allimg">
					{currentItems.map((item, index) => {
						return (
							<div
								className="img"
								key={index}
								onClick={() => getImg(item.imgSrc)}
							>
								<img src={item.imgSrc}/>
							</div>
						);
					})}
				</div>
			</div>

			<ReactPaginate
				breakLabel="..."
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={5}
				pageCount={pageCount}
				previousLabel="< previous"
				renderOnZeroPageCount={null}
			/>
		</>
	);
};

export default OutdoorImages;
