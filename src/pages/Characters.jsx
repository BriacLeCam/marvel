import axios from "axios";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { Link } from "react-router-dom";
import "../styles/characters.scss";

const Characters = () => {
  const [charactersData, setCharactersData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharactersData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/characters");
        // console.log(data);
        setCharactersData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharactersData();
  }, []);

  return isLoading ? (
    <ThreeCircles
      height="80"
      width="80"
      ariaLabel="three-dots-loading"
      innerCircleColor="red"
      middleCircleColor="white"
      outerCircleColor="white"
    />
  ) : (
    <main>
      <div className="characters-wrap">
        {charactersData.results.map((character) => {
          const imageUrl = character.thumbnail.path;
          const imageType = "portrait";
          const imageSize = "medium";
          const imageExtension = character.thumbnail.extension;
          return (
            <Link
              key={character._id}
              to={`/character/${character._id}`}
              className="card-container"
            >
              <article>
                <div>
                  <h2>{character.name}</h2>
                </div>
                <img
                  src={`${imageUrl}/${imageType}_${imageSize}.${imageExtension}`}
                  alt=""
                />
                <p>{character.description}</p>
              </article>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Characters;
