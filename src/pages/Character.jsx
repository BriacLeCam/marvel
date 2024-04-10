import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Character = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  //   console.log(useParams());
  //   const params = useParams();
  //   const id = params.id;

  const { _id } = useParams();
  console.log(_id),
    useEffect(() => {
      const fetchData = async () => {
        try {
          // const {data} = await axios.get();
          const response = await axios.get(
            `site--marvel-backend--6826hc4vnxlk.code.run/character/${_id}`
          );
          console.log(response.data);
          setData(response.data);

          setIsLoading(false);
        } catch (error) {
          console.log(error);
        }
      };
      fetchData();
    }, [_id]);

  return isLoading ? (
    <p>Loading...</p>
  ) : (
    <main>
      <article className="character-container">
        <span>{data.name}</span>
        <img
          src={`${data.thumbnail.path}/portrait_medium.${data.thumbnail.extension}`}
          alt="Character img"
        />
        <div>{data.description}</div>
      </article>
    </main>
  );
};

export default Character;

//       (
//           <main className="character-body">
//               <div>

//       {
//           const imageUrl = data.thumbnail.path;
//           const imageType = "portrait";
//           const imageSize = "medium";
//           const imageExtension = data.thumbnail.extension;
//           <img src={data.product_image.secure_url} alt="" />
//         }
//       <p>{data.product_price} €</p>
//       <div>
//         {/* <p>MARQUE : {data.product_details[0].MARQUE} </p>
//         <p>ÉTAT : {data.product_details[1].ÉTAT} </p>
//     <p>COULEUR : {data.product_details[2].COULEUR} </p> */}

//         {data.product_details.map((detail) => {
//             console.log(detail);
//             const keys = Object.keys(detail);
//             console.log(keys);
//             const keyName = keys[0];
//             console.log(keyName);
//             return (
//                 <p key={keyName}>
//               {keyName} {detail[keyName]}
//             </p>
//           );
//         })}
//       </div>
//         </div>
//     </main>
//   );
// };

// export default Offer;
