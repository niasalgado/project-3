import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import CocktailList from '../../pages/CocktailList/CocktailList';
import NavBar from '../NavBar/NavBar'

export default function App() {
  const [cocktail, setCocktail] = useState(['margarita', 'tequila sunrise']);

  return (
    <>
      <NavBar />
      {/* <CocktailList cocktail={cocktail} key={cocktail}/> */}
    </>
  );
}