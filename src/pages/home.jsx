import { useContext } from "react";
import { Context } from "../context/context";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import './home.css'; 
export function Home() {
  const { loading, recipesList } = useContext(Context);

  return (
    <div className="home-container">
        <div>
          { //!loading && recipesList?.length == 0 ? <FontAwesomeIcon icon={faSpinner} spinPulse /> : null
          }
          {recipesList?.length > 0 ? (
            recipesList.map((item, index) => (
              <div className="recipe-card" key={index}>
                <h2 className="recipe-publisher">{item?.publisher}</h2>
                <img src={item?.image_url} alt={item?.title} />
                <h3 className="recipe-title">{item?.title}</h3>
                <Link className="recipe-link" to={`/recipe-item/${item?.id}`}>
                  Recipe Details
                </Link>
              </div>
            ))
          ) : (
            <p>No recipes available</p>
          )}
        </div>
    </div>
  );
}
