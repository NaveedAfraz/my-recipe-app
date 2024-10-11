import { useContext, useEffect } from "react";
import { Context } from "../context/context";
import { useParams } from "react-router-dom";
import "./details.css"; // Import the CSS file
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
export function Details() {
  const {
    setDetails,
    details,
    favourites,
    setfavourities,
    handleAddToFavorite,
  } = useContext(Context);
  const { id } = useParams();

  useEffect(() => {
    async function recipeDetails() {
      try {
        const res = await fetch(
          `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
        );
        const data = await res.json();
        console.log(data);
        if (data?.data) {
          setDetails(data?.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    recipeDetails();
    console.log(details);
  }, [id, setDetails]);

  return (
    <div className="details-container">
      {details ? (
        <>
          <div className="details-header">
            <img src={details?.recipe?.image_url} alt={details.title} />
            <div className="details-info">
              <h2>{details?.recipe.title}</h2>
              <h3 className="publisher">
                Publisher:{details?.recipe?.publisher}
              </h3>
              <button onClick={() => handleAddToFavorite(details?.recipe)}>
                {favourites.findIndex(
                  (item) => item.id === details?.recipe.id
                ) === -1
                  ? "Add to favourites"
                  : "Remove from favourites"}
              </button>
            </div>
          </div>
          <div className="ingredients-list">
            <h4>Ingredients:</h4>
            <ul>
              {details?.recipe?.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span>
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span>{ingredient.description}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="loading">
          <p>Loading recipe details... </p>
          <FontAwesomeIcon className="spinner" icon={faSpinner} spinPulse />
        </div>
      )}
    </div>
  );
}
