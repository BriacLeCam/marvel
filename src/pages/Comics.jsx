import axios from "axios";
import { useEffect, useState } from "react";
import { ThreeCircles } from "react-loader-spinner";

const Comics = () => {
  const [comicsData, setComicsData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchComicsData = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/comics");
        // console.log(data);
        setComicsData(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchComicsData();
  }, []);

  return isLoading ? (
    <ThreeCircles
      height="80"
      width="80"
      ariaLabel="three-dots-loading"
      innerCircleColor="red"
      middleCircleColor="black"
      outerCircleColor="black"
    />
  ) : (
    <main>
      <h1>Comics</h1>
      {comicsData.results.map((comic) => {
        const imageUrl = comic.thumbnail.path;
        const imageType = "portrait";
        const imageSize = "medium";
        const imageExtension = comic.thumbnail.extension;

        return (
          <article key={comic._id}>
            <h2>{comic.title}</h2>
            <p>{comic.description}</p>
            <img
              src={`${imageUrl}/${imageType}_${imageSize}.${imageExtension}`}
              alt=""
            />
          </article>
        );
      })}
    </main>
  );
};

export default Comics;
