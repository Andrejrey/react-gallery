import { useState, useEffect } from "react";
import axios from "axios";
import TitleBar from "./titleBar";

import "../aboutMe.css";

const AboutMe = () => {
  const [aboutMe, setAboutMe] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/about_me")
      .then(function (response) {
        // handle success
        console.log("Axios response", response);
        setAboutMe(response.data);
        console.log(aboutMe);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }, []);

  return (
    <div className="bio-body">
      <TitleBar />
      <div className="biography">
        <div className="biography-box">
          <div className="bio-left">
            <h2>{aboutMe.title}</h2>
            <div>{aboutMe.text}</div>
          </div>
          <div className="bio-right">
            <img src={aboutMe.imgSrc} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
