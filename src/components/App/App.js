import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import HomePage from '../../pages/HomePage/HomePage';
import CocktailList from '../../pages/CocktailList/CocktailList';
import CocktailIngredients from '../../pages/Cocktail/Cocktail';

export default function App() {
  return (
    <>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/cocktails' element={<CocktailList />} />
          <Route path='/cocktails/:id' element={<CocktailIngredients />} />
        </Routes>
      </main>
    </>
  );
}