import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CocktailIngredients() {

  const { id } = useParams()
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  const [cocktail, setCocktail] = useState(null);
  const fetchCocktail = async () => {
    try {
      const response = await fetch(url + id);
      const data = await response.json();

      setCocktail(data.drinks[0]);
    } catch (err) {
      console.log(err);
    }
  };
  
  useEffect(() => {
    fetchCocktail();
  }, []);
  
  const {
    strDrink,
    strIngredient1,
    strIngredient2,
    strIngredient3,
    strDrinkThumb,
  } = cocktail;

  const loaded = () => {
    return (
      <>
        {cocktail && (
          <div>
          <h2>{strDrink}</h2>

          <ul>
            Ingredients:
            <li>{strIngredient1}</li>
            <li>{strIngredient2}</li>
            <li>{strIngredient3}</li>
          </ul>

          </div>
        )}
      </>
    )
  };

  const loading = () => {
    return <h1>Loading...</h1> ;
  };
  // if coin has data, run the loaded function, otherwise, run loading
  return <section>{cocktail ? loaded() : loading()}</section> ;
}