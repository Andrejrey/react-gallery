import React from "react";
import HamburgerMenu from "./components/hamburgerMenu";
import SideBarList from "./components/sideBarList";
import SocialMedia from "./components/socialMedia";

const MainApp = () => {
	return (
		<div className="main_box">
			<HamburgerMenu/>

			<div className="sidebar_menu">
				<div className="logo">
					<h1>Menu</h1>
				</div>
				<SideBarList/>
				<SocialMedia/>
			</div>
			<img className="logo2" src="/reylogo.png" alt=""/>
		</div>
	);
};

export default MainApp;
