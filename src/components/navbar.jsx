import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="main-bar">
      <img className="logo" src="/reylogo.png" alt="logo" />
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <span></span>
          <span></span>
          <span></span>
        </label>
        <div className="logo-header">
          <a href="#">Gallery</a>
        </div>
        <ul className="ul-nav">
          <li className="active">
            <Link to="/">Home</Link>
          </li>
          <li className="li-nav">
            <Link to="/aboutme">About Me</Link>
          </li>
          <li className="li-nav">
            <Link to="/outdoorgallery">Outdoor Images</Link>
          </li>
          <li className="li-nav">
            <Link to="/indoorgallery">Indoor Images</Link>
          </li>
          <li className="li-nav">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
