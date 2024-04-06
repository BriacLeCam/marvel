import { Link } from "react-router-dom";
import "../styles/home.scss";

const Home = () => {
  return (
    <main>
      <div className="home-container">
        <Link to={"characters"}>
          <button className="browseButton">Browse by characters</button>
        </Link>
        <Link to={"comics"}>
          <button className="browseButton">Browse by comics</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
