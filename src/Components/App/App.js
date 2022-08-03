import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import './App.css';

const App = () => {
  const [ingredients, setIngredients] = useState([])
  
  return (
    <main className="main-container">
      <header>
        <h1 className="header-title">Calamity Kitchen</h1>
      </header>
    </main>
  )
}

export default App;
