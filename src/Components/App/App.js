import React, { useState, useEffect } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';
import { Route } from 'react-router-dom';
import './App.css';
import Ingredients from '../Ingredients/Ingredients';
import Dropdown from '../Dropdown/Dropdown';

const App = () => {
  const [ingredients, setIngredients] = useState([])
  console.log("ingredients", ingredients)

  const [cookingEffect, setCookingEffect] = useState('')

  //setALlCooking effects, pass array of strings down to Dropdown
  // pass selected Cooking effect back up to app to filter ingredients by
  // conditional if cookingeffect is truthy render filteredIngredients 
  // button to go back to all ingredients?

  const getMaterialIngredients = () => {
    fetch('https://botw-compendium.herokuapp.com/api/v2/category/materials')
    .then(response => response.json())
    .then(data => setIngredients(data.data))
    .catch(error => console.log(error))
  }

  const getCreatureIngredients = () => {
    fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
    .then(response => response.json())
    .then(data => setIngredients(prevState => [...prevState, ...data.data.food]))
    .catch(error => console.log(error))
  }

  useEffect(() => {
    getMaterialIngredients()
    getCreatureIngredients()
  }, [])

  const filterIngredients = () => {
    const filteredIngredients = ingredients.filter(ingredient => ingredient.cooking_effect === cookingEffect)
    setIngredients(filteredIngredients)
  }

  return (
    <main className="main-container">
      <header>
        <h1 className="header-title">Calamity Kitchen</h1>
      </header>
      <Route exact path="/" >
        <Dropdown ingredients={ingredients} cookingEffect={cookingEffect} setCookingEffect={setCookingEffect} filterIngredients={filterIngredients}/>
        <Ingredients ingredients={ingredients} />
      </Route>
    </main>
  )
}

export default App;
