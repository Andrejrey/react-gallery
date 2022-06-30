import {
  MdCameraOutdoor,
  MdOutlineCameraIndoor,
  MdPermContactCalendar,
} from "react-icons/md";
import { BsFileTextFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import SocialMedia from "./socialMedia";
import HamburgerMenu from "./hamburgerMenu";

const MobileView = () => {
  return (
    <div>
      <div className="sidebar_menu">
        <div className="logobar">
          <a href="#">Menu</a>
        </div>
        <div className="menu">
          <ul>
            <li>
              <Link to="/aboutme">
                <BsFileTextFill className="icon" />
                About Me
              </Link>
            </li>
            <li>
              <Link to="/outdoorgallery">
                <MdCameraOutdoor className="icon" />
                Outdoor Images
              </Link>
            </li>
            <li>
              <Link to="/indoorgallery">
                <MdOutlineCameraIndoor className="icon" />
                Indoor Images
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <MdPermContactCalendar className="icon" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <SocialMedia />
    </div>
  );
};

export default MobileView;
