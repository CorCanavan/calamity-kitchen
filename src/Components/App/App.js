import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Ingredients from '../Ingredients/Ingredients';
import Dropdown from '../Dropdown/Dropdown';

const App = () => {
  const [ingredients, setIngredients] = useState([])
  console.log("ingredients", ingredients)

  const [cookingEffect, setCookingEffect] = useState('')
  const [filteredIngredients, setFilteredIngredients] = useState([])

  //setALlCooking effects, pass array of strings down to Dropdown
  // pass selected Cooking effect back up to app to filter ingredients by
  // conditional if cookingeffect is truthy render filteredIngredients 
  // button to go back to all ingredients?

  const getMaterialIngredients = () => {
    return fetch('https://botw-compendium.herokuapp.com/api/v2/category/materials')
    .then(response => response.json())
    .then(data => data.data)
    .catch(error => console.log(error))
  }

  const getCreatureIngredients = () => {
    return fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
    .then(response => response.json())
    .then(data => data.data.food)
    .catch(error => console.log(error))
  }

  useEffect(() => {
    const getIngredients = async () => {
      try {
          const materials = await getMaterialIngredients()
          const creatures = await getCreatureIngredients()
          const formattedIngredients = [...materials, ...creatures].map(ingredient => {
            if (!ingredient.cooking_effect) {
              ingredient.cooking_effect = 'no effect'
            }
            return ingredient;
          })
          setIngredients(formattedIngredients)
      } catch (error) {
        console.log(error)
      }
    } 
    getIngredients()
  }, [])

  const handleEffectSelect = (effect) => {
    console.log("effect before", effect)
    setCookingEffect(effect)

    console.log("effect after", effect, "cookingEffect after", cookingEffect)
    const filtered = ingredients.filter(ingredient => ingredient.cooking_effect === effect)
    console.log("filtered const", filtered)
    setFilteredIngredients(filtered)
  }
  // console.log("filteredstate", filteredIngredients)

  // const filterIngredients = () => {
  //   const filteredIngredients = ingredients.filter(ingredient => ingredient.cooking_effect === cookingEffect)
  //   setIngredients(filteredIngredients)
  // }

  return (
    <main className="main-container">
      <header>
        <h1 className="header-title">Calamity Kitchen</h1>
      </header>
      <Route exact path="/" >
        <Dropdown ingredients={ingredients} setCookingEffect={setCookingEffect} handleEffectSelect={handleEffectSelect} />
        <Ingredients ingredients={ingredients} />
      </Route>
    </main>
  )
}

export default App;
