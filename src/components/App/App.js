import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

import NavBar from '../NavBar/NavBar';
import HomePage from '../../pages/HomePage/HomePage';
import CocktailList from '../../pages/CocktailList/CocktailList';
import CocktailIngredients from '../../pages/CocktailIngredients/CocktailIngredients';

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