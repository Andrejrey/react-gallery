import { MdOutlineKeyboardBackspace } from "react-icons/md";

import { Link } from "react-router-dom";

const TitleBar = () => {
  let url = window.location.pathname;
  console.log(url);
  return (
    <div className="titlebar">
      <div className="logo-header-titlebar">
        <a href="#">Gallery</a>
      </div>
      {/*<h2>{url === "/outdoorgallery" ? "Outdoor Images" : ""}</h2>*/}
      <Link to="/">
        <MdOutlineKeyboardBackspace />
      </Link>
    </div>
  );
};

export default TitleBar;
