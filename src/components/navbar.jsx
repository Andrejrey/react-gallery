import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <img className="logo" src="/reylogo.png" alt="logo" />
      <nav>
        <ul className="nav_links">
          <li>
            <Link to="/aboutme">About Me</Link>
          </li>
          <li>
            <Link to="/outdoorgallery">Outdoor Images</Link>
          </li>
          <li>
            <Link to="/indoorgallery">Indoor Images</Link>
          </li>
        </ul>
      </nav>
      <Link to="/contact" className="con_btn">
        <button className="conbtn">Contact</button>
      </Link>
    </div>
  );
};

export default NavBar;
