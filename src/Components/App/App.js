import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Ingredients from '../Ingredients/Ingredients';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Dropdown from '../Dropdown/Dropdown';
import Error from '../Error/Error';
import { getMaterialIngredients, getCreatureIngredients } from '../../apiCalls';

const App = () => {
  const [ingredients, setIngredients] = useState([])
  const [filteredIngredients, setFilteredIngredients] = useState([])
  const [allCookingEffects, setAllCookingEffects] = useState([])
  const [cookingEffect, setCookingEffect] = useState('')
  const [error, setError] = useState('')

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
        setError('Uh oh! Something went wrong, please try again.')
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
        <Link to="/">
        <h1 className="header-title">Calamity Kitchen</h1>
        </Link>
      </header>
      {error && <p className="app-error">{error}</p>}
      <Switch>
        <Route exact path="/" render={() => {
          return <div>
              <Dropdown allCookingEffects={allCookingEffects} handleEffectSelect={handleEffectSelect} />
              <Ingredients ingredients={!cookingEffect ? ingredients : filteredIngredients} />
            </div>
        }} />
        <Route exact path="/ingredient/:id" render={({ match }) => {
          const ingredientToRender = ingredients.find(ingredient => ingredient.id === parseInt(match.params.id))
          
          return <IngredientDetails {...ingredientToRender} />
        }}/>
        <Route path="*" component={Error} />
      </ Switch>
    </main>
  )
}

export default App;
