import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import Layout from './components/Layout';
import Ingredients from './components/Ingredients.js';
import Nutrition from './components/Nutrition';
import NoPage from './components/Nopage';

const App = ()=>{
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ingredients" element={<Ingredients />} />
          <Route path="nutrition" element={<Nutrition />} />
          <Route path="*" element={<NoPage />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
