import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

export default function CocktailList(props) {
const [ cocktails, setCocktails] = useState(['margarita', 'arnold palmer']);
const fetchCocktails = async () => {
  try {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php'); //TODO: Link API here
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
    <div className="cocktails-list">
        {cocktails.map(c => (
            <h2 key={c.idDrink}>{c.strDrink}</h2>
        ))}
    </div>
  )
}