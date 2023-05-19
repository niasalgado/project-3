import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import './CocktailList.css'

export default function CocktailList(props) {
const [ cocktailList, setCocktailList] = useState([]);
const fetchCocktails = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await response.json();

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
      <div className='container'>
        <NavBar text={' '}/>
        <h2>Cocktail List</h2>

        <div className="cocktail-list-container">
          {cocktailList.map((cocktail) => {
            let { idDrink, strDrink } = cocktail;
            const id = {idDrink}
            
            return (
                <p><Link to={`/cocktails/${idDrink}`} key={id} id={id}>
                      {strDrink}
                    </Link>
                </p>
            )
          })}
        </div>
      </div>
  )
}