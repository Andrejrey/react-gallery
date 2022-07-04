import TitleBar from "./titleBar";

import "../aboutMe.css";

const AboutMe = () => {
  return (
    <div className="bio-body">
      <TitleBar />
      <div className="biography">
        <div className="biography-box">
          <div className="bio-right">
            <h2>Biography</h2>
            <text>
              Dolor sit, amet consectetur adipisicing elit. Magni temporibus nam natus omnis sunt dignissimos soluta numquam! Aperiam doloremque, vero
              voluptates saepe quibusdam labore, ratione explicabo accusamus ipsa id minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Magni temporibus nam natus omnis sunt dignissimos soluta numquam! Aperiam doloremque, vero voluptates saepe quibusdam labore, ratione
              explicabo accusamus ipsa id minima.
            </text>
            <text className="text2">
              Dolor sit, amet consectetur adipisicing elit. Magni temporibus nam natus omnis sunt dignissimos soluta numquam! Aperiam doloremque, vero
              voluptates saepe quibusdam labore, ratione explicabo accusamus ipsa id minima. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Magni temporibus nam natus omnis sunt dignissimos soluta numquam! Aperiam doloremque, vero voluptates saepe quibusdam labore, ratione
              explicabo accusamus ipsa id minima.
            </text>
          </div>
          <div className="bio-left"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

/* <div className="titlebar">
<TitleBar />
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
    <img src="/bio.jpg" className="bioimg" alt="" />
  </div> */
