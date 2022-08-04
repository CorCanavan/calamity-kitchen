import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Ingredients from '../Ingredients/Ingredients';
import Dropdown from '../Dropdown/Dropdown';
import { getMaterialIngredients, getCreatureIngredients } from '../../apiCalls';

const App = () => {
  const [ingredients, setIngredients] = useState([])
  console.log("ingredients", ingredients)
  const [filteredIngredients, setFilteredIngredients] = useState([])
  console.log("filteredIngredients", filteredIngredients);
  const [allCookingEffects, setAllCookingEffects] = useState([])
  console.log("allCookingEffects", allCookingEffects)
  const [cookingEffect, setCookingEffect] = useState('')

  // const getMaterialIngredients = () => {
  //   return fetch('https://botw-compendium.herokuapp.com/api/v2/category/materials')
  //   .then(response => response.json())
  //   .then(data => data.data)
  //   .catch(error => console.log(error))
  // }

  // const getCreatureIngredients = () => {
  //   return fetch('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
  //   .then(response => response.json())
  //   .then(data => data.data.food)
  //   .catch(error => console.log(error))
  // }

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
          const cookingEffects = formattedIngredients
          .reduce((acc, ingredient) => {
            if (!acc.includes(ingredient.cooking_effect)) {
            acc.push(ingredient.cooking_effect)
            }
            return acc;
          }, []).sort()
          setIngredients(formattedIngredients)
          setAllCookingEffects(cookingEffects);
      } catch (error) {
        console.log(error)
      }
    } 
    getIngredients()
  }, [])

  const handleEffectSelect = (effect) => {
    setCookingEffect(effect)
    const filtered = ingredients.filter(ingredient => ingredient.cooking_effect === effect)
    setFilteredIngredients(filtered)
  }

  return (
    <main className="main-container">
      <header>
        <h1 className="header-title">Calamity Kitchen</h1>
      </header>
      <Route exact path="/" >
        <Dropdown allCookingEffects={allCookingEffects} handleEffectSelect={handleEffectSelect} />
        <Ingredients ingredients={!cookingEffect ? ingredients : filteredIngredients} />
      </Route>
    </main>
  )
}

export default App;
