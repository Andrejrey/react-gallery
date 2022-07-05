import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./gallery.css";
import "./aboutMe.css";
import "./contact.css";
import "./navBar.css";
import "./titleBar.css";
import MainApp from "./mainApp";
import reportWebVitals from "./reportWebVitals";
import AboutMe from "./components/aboutMe";
import OutDoorGallery from "./components/outDoorGallery";
import InDoorGallery from "./components/inDoorGallery";
import Contact from "./components/contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainApp />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/outdoorgallery" element={<OutDoorGallery />} />
        <Route path="/indoorgallery" element={<InDoorGallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
