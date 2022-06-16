import React from "react";
import {MdOutlineKeyboardBackspace} from "react-icons/md";
import {Link} from "react-router-dom";
import "../aboutMe.css";

const AboutMe = () => {
	return (
		<>
			<div className="titlebar">
				{/*<a>Outdoor Images</a> */}
				<Link to="/">
					<MdOutlineKeyboardBackspace/>
				</Link>
			</div>
			<div className="aboutme">
				<div className="biography">
					<h1>Biography</h1>
				</div>
				<div className="text">
					<h3>Lorem ipsum </h3>
					<text>
						Dolor sit, amet consectetur adipisicing elit. Magni temporibus nam
						natus omnis sunt dignissimos soluta numquam! Aperiam doloremque,
						vero voluptates saepe quibusdam labore, ratione explicabo accusamus
						ipsa id minima. Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Magni temporibus nam natus omnis sunt dignissimos soluta
						numquam! Aperiam doloremque, vero voluptates saepe quibusdam labore,
						ratione explicabo accusamus ipsa id minima.
					</text>
					<text className="text2">
						Dolor sit, amet consectetur adipisicing elit. Magni temporibus nam
						natus omnis sunt dignissimos soluta numquam! Aperiam doloremque,
						vero voluptates saepe quibusdam labore, ratione explicabo accusamus
						ipsa id minima. Lorem ipsum dolor sit, amet consectetur adipisicing
						elit. Magni temporibus nam natus omnis sunt dignissimos soluta
						numquam! Aperiam doloremque, vero voluptates saepe quibusdam labore,
						ratione explicabo accusamus ipsa id minima.
					</text>
				</div>
				<img src="/bio.jpg" className="bioimg" alt=""/>
			</div>
		</>
	);
};

export default AboutMe;
