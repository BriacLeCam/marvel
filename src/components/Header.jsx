import logo from "../images/marvel_logo.png";
import { Link } from "react-router-dom";
import "../styles/header.scss";

const Header = (token, handleToken) => {
  return (
    <header>
      <div className="logo-container">
        <img src={logo} alt="" />
      </div>
      <section className="buttons-container">
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
          <div className="signupLoginButtons-container">
            <Link to="/signup">
              <button>Signup</button>
            </Link>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        )}
      </section>
    </header>
  );
};

export default Header;
