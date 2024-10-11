import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
export const Context = createContext();
export default function Globalcontext({ children }) {
  const [inputValue, setInputValue] = useState("");
  const [loading, setloading] = useState(true);
  const [recipesList, setRecipeslist] = useState([]);
  const [details, setDetails] = useState(null);
  const [favourites, setfavourities] = useState([]);
  const [toggle, settoggle] = useState(false);
  const navigate = useNavigate();
  async function handleSearch() {
    try {
      const res = await fetch(
        `https://forkify-api.herokuapp.com/api/v2/recipes?search=${inputValue}`
      );
      const data = await res.json();
      console.log(data);
      if (data?.data?.recipes) {
        setloading(false);
        setRecipeslist(data?.data?.recipes);
        console.log(recipesList);
        setInputValue("");
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleAddToFavorite = (recipe) => {
    /*// console.log(recipe);
    const List = [...favourites]
    const index = favourites.findIndex((item,index)=> item.id === recipe.id) // if matches then return the item or retuen -1 if not matched similar to filter method 
    if (index === -1) {
      List.push(recipe)
    }
    else {
      List.splice(index,1)// removes it 
    }
    setfavourities(List)
    console.log(favourites)*/
    //const ids = favourites.some((item) => item.id === recipe.id);
    const ids = favourites.map((item) => item.id);
    //const List = [...favourites];
    let filtered;
    if (ids.includes(recipe.id)) {
      filtered = favourites.filter((item) => item.id !== recipe.id);
      setfavourities(filtered);
      console.log(favourites);
    } else {
      setfavourities([...favourites, recipe]);
      console.log(favourites);
    }
  };
  return (
    <Context.Provider
      value={{
        setInputValue,
        inputValue,
        handleSearch,
        loading,
        recipesList,
        setDetails,
        details,
        favourites,
        setfavourities,
        handleAddToFavorite,
        settoggle,
        toggle,
      }}
    >
      {children}
    </Context.Provider>
  );
}
