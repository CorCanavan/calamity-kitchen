import React, { useState, useEffect } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import Ingredients from '../Ingredients/Ingredients';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Dropdown from '../Dropdown/Dropdown';
import Error from '../Error/Error';
import Header from '../Header/Header';
import { getMaterialIngredients, getCreatureIngredients } from '../../apiCalls';
import cookingJingle from '../../assets/cookingJingle.mp3';
import divineBeasts from '../../assets/divine_beasts.png';

const App = () => {

  const [ingredients, setIngredients] = useState([])
  const [filteredIngredients, setFilteredIngredients] = useState([])
  const [allCookingEffects, setAllCookingEffects] = useState([])
  const [cookingEffect, setCookingEffect] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  
  useEffect(() => {
    setIsLoading(true)
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
          setIsLoading(false)
      } catch (error) {
        setError('Uh oh! Something went wrong, please try again later.')
      }
    } 
    getIngredients()
  }, [])

  const audio = new Audio(cookingJingle)

  const handleEffectSelect = (effect) => {
    setCookingEffect(effect)
    const filtered = ingredients.filter(ingredient => ingredient.cooking_effect === effect)
    setFilteredIngredients(filtered)
    audio.play()
  }

  const loading = isLoading ? <div className="loading"><p className="loading-msg">Loading...</p><img className="loading-img" src={divineBeasts} alt="divine-beasts-img" /> </div> : null 

  return (
    <main className="main-container">
      {/* <header>
        <Link to="/">
          <h1 className="header-title">Calamity Kitchen</h1>
        </Link>
      </header> */}
        {/* <Header /> */}
        {/* {error && <p className="app-error">{error}</p>}
        {loading} */}
      <Switch>
      {error && <p className="app-error">{error}</p>}
      {loading}
      <Route 
          exact path="/" 
          render={() => {
            return <div>
    
            </div>
          }} 
        />
        <Route 
          exact path="/main" 
          render={() => {
            return <div>
              <Header />
              <Dropdown 
                allCookingEffects={allCookingEffects} 
                handleEffectSelect={handleEffectSelect} 
                cookingEffect={cookingEffect}
              />
              <Ingredients 
                ingredients={!cookingEffect ? ingredients : filteredIngredients} 
              />
            </div>
          }} 
        />
        <Route 
          exact path="/ingredient/:id" 
          render={({ match }) => {
            const ingredientToRender = ingredients.find(ingredient => ingredient.id === parseInt(match.params.id))
            return <div>
              <Header />
              <IngredientDetails {...ingredientToRender} />
            </div>
          }}
        />
        <Route path="*" component={Error} />
      </ Switch>
    </main>
  )
}

export default App;
