import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CocktailList(props) {
const [ cocktailList, setCocktailList] = useState([]);
const fetchCocktails = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    console.log(data);
    setCocktailList(data.drinks);
  } catch (error) {
    // TODO: Link & Style Error Page
    console.log(error)
  }
}

useEffect(() => {
  fetchCocktails();
}, []);

  return (
    // TODO: RENDER LIST OF COCKTAILS HERE
      <div className="cocktails-list">
        <h2>Cocktail List</h2>
        
        {cocktailList.map((cocktail) => {

          return (
            <p><Link to={`/cocktails/${cocktail.idDrink}`} key={cocktail.idDrink}>
              {cocktail.strDrink}
            </Link>
            </p>
          );
        })}
      </div>
  )
}