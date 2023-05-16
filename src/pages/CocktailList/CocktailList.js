import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CocktailList(props) {
const [ cocktails, setCocktails] = useState([]);
const fetchCocktails = async () => {
  try {
    const response = await fetch(); //TODO: Link API here
    const data = await response.json();

    setCocktails(data.results);
  } catch (error) {
    // TODO: Link & Style Error Page
  }
}

useEffect(() => {
  fetchCocktails();
}, []);

  return (
    <div className="cocktails-list">
        {props.cocktail.map(c => (
            <div>{c}</div>
        ))}
    </div>
  )
}
