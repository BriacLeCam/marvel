import logo from "../images/marvel_logo.png";
import { Link } from "react-router-dom";
import "../styles/header.scss";
import { isButtonElement } from "react-router-dom/dist/dom";

const Header = (token, handleToken) => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      {window.location.pathname === "/" && <form>je suis un formulaire</form>}
    </header>
  );
};

export default Header;
