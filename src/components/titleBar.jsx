import React from "react";
import {MdOutlineKeyboardBackspace} from "react-icons/md";
import {Link, useParams} from "react-router-dom";

const TitleBar = () => {
	let url = window.location.pathname;
	console.log(url);
	return (
		<div className="titlebar">
			{<h2>{url === "/outdoorgallery" ? "Outdoor Images" : ""}</h2>}
			<Link to="/">
				<MdOutlineKeyboardBackspace/>
			</Link>
		</div>
	);
};

export default TitleBar;
