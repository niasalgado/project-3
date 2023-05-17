import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';

export default function CocktailIngredients() {

  const { id } = useParams()
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  
  const [cocktail, setCocktail] = useState(null);
  const fetchCocktail = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log("my data: " , data);
      setCocktail(data.drinks[0]);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("cocktail: " , cocktail)
  
  useEffect(() => {
    fetchCocktail();
  }, []);
  

  const loaded = () => {
    return (
      <>
      <NavBar text={'Back to Cocktail Index'}/>
      <h2>{cocktail.strDrink}</h2>
      
      <ul>
        <li>Glass: {cocktail.strGlass}</li>
        <li>{cocktail.strMeasure1} {cocktail.strIngredient1}</li>
        <li>{cocktail.strMeasure2} {cocktail.strIngredient2}</li>
        <li>{cocktail.strMeasure3} {cocktail.strIngredient3}</li>
      </ul>

      <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
      </>
    )
  };

  const loading = () => {
    return <h1>Loading...</h1> ;
  };

  return <section>{cocktail ? loaded() : loading()}</section> ;
}