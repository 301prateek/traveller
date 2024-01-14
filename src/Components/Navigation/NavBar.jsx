import "./NavBar.scss";
import LuggageIcon from "@mui/icons-material/Luggage";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="navbar-container">
      <h1 className="header">
        <div>
          <Link to={"/"}>Traveller</Link>
        </div>
        <div className="icon">
          <LuggageIcon fontSize={"large"} />
        </div>
      </h1>
      <nav className="navigation">
        <ul className="navbar-list">
          <li className="list-item">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="list-item">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="list-item">
            <Link to={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
      <div className="profile">
        <div>Hi, Jack</div>
        <div>
          <button className="menu-btn">
            <MenuIcon />
          </button>
        </div>
        <div>
          <button className="account-btn">
            <AccountBoxIcon />
          </button>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
