import { useContext } from "react";
import { Context } from "../context/context";
import "./Favourites.css"; // Import the CSS file for styling

export function Favourites() {
  const { favourites, handleAddToFavorite } = useContext(Context);

  return (
    <div className="favourites-container">
      {favourites.length > 0 ? (
        favourites.map((recipe) => (
          <div className="favourite-recipe" key={recipe.id}>
            <h2>{recipe.title}</h2>
            <img
              src={recipe?.image_url}
              alt={recipe.title}
              className="recipe-image"
            />
            <h3 className="publisher">Publisher: {recipe.publisher}</h3>
            <h4>Ingredients:</h4>
            <ul>
              {recipe?.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <span>
                    {ingredient.quantity} {ingredient.unit}
                  </span>
                  <span>{ingredient.description}</span>
                </li>
              ))}
            </ul>
            <button onClick={() => handleAddToFavorite(recipe)}>
              Remove from Favourites
            </button>
          </div>
        ))
      ) : (
        <p>No favourites found.</p>
      )}
    </div>
  );
}
