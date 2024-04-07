import logo from "../images/marvel_logo.png";
import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = ({ token, handleToken }) => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <section className="buttons-container">
        {window.location.pathname === "/characters" && (
          <form>
            je suis un search characters ATTENTION remplacer par futur composant
            searchCharacter qui va se render lors de son appel
          </form>
        )}
        {window.location.pathname === "/comics" && (
          <form>
            je suis un search comics ATTENTION remplacer par futur composant
            searchComic qui va se render lors de son appel
          </form>
        )}
        {token ? (
          <article>
            <button>favorites</button>
            <button
              className="signOutButton-container"
              onClick={() => {
                handleToken(null);
              }}
            >
              Sign out
            </button>
          </article>
        ) : (
          <article className="signupLoginButtons-container">
            <Link to="/signup">
              <button>Signup</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </article>
        )}
      </section>
    </header>
  );
};

export default Header;
