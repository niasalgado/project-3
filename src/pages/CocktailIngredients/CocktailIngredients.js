import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function CocktailIngredients() {

  const {id} = useParams()
  const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

  const [cocktail, setCocktail] = useState(null);
  const fetchCocktail = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setCocktail(data.drinks[0]);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>CocktailIngredients</div>
  )
}
