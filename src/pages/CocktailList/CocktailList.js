import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CocktailList(props) {
const [ cocktails, setCocktails] = useState([]);
const fetchCocktails = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    const data = await response.json();
    
    setCocktails(data.drinks);
  } catch (error) {
    // TODO: Link & Style Error Page
  }
}

useEffect(() => {
  fetchCocktails();
}, []);

  return (
    // TODO: RENDER LIST OF COCKTAILS HERE
      <div className="cocktails-list">
        <h2>Cocktail List</h2>
        
        {/* {cocktails.map((cocktail) => {

          // return (
          //   <Link to={`/cocktails/${idDrink}`} key={idDrink}>
          //     {strDrink}
          //   </Link>
          // );
        })} */}
      </div>
  )
}