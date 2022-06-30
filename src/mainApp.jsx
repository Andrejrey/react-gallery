import React from "react";
import MobileView from "./components/mobileView";
import NavBar from "./components/navbar";

const MainApp = () => {
  return (
    <div className="main_box">
      <div className="navbar_menu">
        <NavBar />
      </div>
      <div className="sidebar_menu">
        <MobileView />
      </div>
    </div>
  );
};

export default MainApp;
