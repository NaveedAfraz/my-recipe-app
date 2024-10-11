import React, { useContext } from "react";
import { Context } from "../context/context";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun ,faBowlFood} from "@fortawesome/free-solid-svg-icons";
import "./navbar.css";
export function Navbar({ isDarkMode, setIsDarkMode }) {
  const { inputValue, setInputValue, handleSearch } = useContext(Context);

  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSearch(e);
    }
  };

  return (
    <nav className="navbar">
      <NavLink to={"/"} style={{display:"flex"}}> 
      <h2>Recipe Menu</h2>
      <FontAwesomeIcon icon={faBowlFood} />
      </NavLink>
      <div className="box2">
        <input
          type="text"
          placeholder="Enter the recipe"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKey}
        />
        <button onClick={handleSearch}>Search</button>
        <button onClick={() => setIsDarkMode((prev) => !prev)}>
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
        <Link to="/">Home</Link>
        <Link to="/favourites">Favorites</Link>
      </div>
    </nav>
  );
}
