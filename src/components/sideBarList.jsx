import {
	MdCameraOutdoor,
	MdOutlineCameraIndoor,
	MdPermContactCalendar,
} from "react-icons/md";
import {BsFileTextFill} from "react-icons/bs";
import React from "react";
import {Link} from "react-router-dom";

const SideBarList = () => {
	return (
		<div className="menu">
			<ul>
				<li>
					<Link to="/aboutme">
						<BsFileTextFill className="icon"/>
						About Me
					</Link>
				</li>
				<li>
					<Link to="/outdoorgallery">
						<MdCameraOutdoor className="icon"/>
						Outdoor Images
					</Link>
				</li>
				<li>
					<Link to="/indoorgallery">
						<MdOutlineCameraIndoor className="icon"/>
						Indoor Images
					</Link>
				</li>
				<li>
					<Link to="/contact">
						<MdPermContactCalendar className="icon"/>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default SideBarList;
