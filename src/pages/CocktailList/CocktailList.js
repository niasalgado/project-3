import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';

export default function CocktailList(props) {
const [ cocktailList, setCocktailList] = useState([]);
const fetchCocktails = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();
    console.log(data);
    console.log(data.drinks[0]);

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
      <div className="cocktails-list">
         <NavBar text={' '}/>
        <h2>Cocktail List</h2>
        
        {cocktailList.map((cocktail) => {

          let { idDrink, strDrink } = cocktail;
          const id = {idDrink}
          console.log(id)

          return (
            <p><Link to={`/cocktails/${idDrink}`} key={idDrink} id={id}>
              {strDrink}
            </Link>
            </p>
          );
        })}
      </div>
  )
}