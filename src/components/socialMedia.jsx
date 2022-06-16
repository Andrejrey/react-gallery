import React from "react";
import {BsFacebook} from "react-icons/bs";
import {GrInstagram} from "react-icons/gr";
import {Link} from "react-router-dom";

const SocialMedia = () => {
	return (
		<div className="social_media">
			<Link to="#">
				<i>
					<BsFacebook/>
				</i>
			</Link>
			<Link to="#">
				<i>
					<GrInstagram/>
				</i>
			</Link>
		</div>
	);
};

export default SocialMedia;
