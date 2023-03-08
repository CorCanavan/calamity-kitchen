import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Ingredients from '../Ingredients/Ingredients';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import Dropdown from '../Dropdown/Dropdown';
import Error from '../Error/Error';
import Header from '../Header/Header';
import Welcome from '../Welcome/Welcome';
import Search from '../Search/Search';
import { getMaterialIngredients, getCreatureIngredients } from '../../apiCalls';
import cookingJingle from '../../assets/cookingJingle.mp3';
import divineBeasts from '../../assets/divine_beasts.png';

const App = () => {

  const [ingredients, setIngredients] = useState([])
  const [filteredIngredients, setFilteredIngredients] = useState([])
  const [allCookingEffects, setAllCookingEffects] = useState([])
  const [cookingEffect, setCookingEffect] = useState('')
  const [searchValue, setSearchValue] = useState('')
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
    setSearchValue("")
    audio.play()
  }

  const handleSearchValueInput = (value) => {
    const formattedValue = value.toLowerCase();
    setSearchValue(formattedValue);
    console.log("searchValueOutside", searchValue)
    console.log("formattedValueOutside", formattedValue)
    if (!cookingEffect && formattedValue) {
      console.log("formattedValue1 if", formattedValue)
      console.log('searchValue1 if', searchValue)
      const allIngredientsByInput = ingredients.filter(ingredient => ingredient.name.includes(formattedValue))
      console.log("formattedValue2 if", formattedValue)
      console.log('searchValue2 if', searchValue)
      setFilteredIngredients(allIngredientsByInput)
    } else {
      console.log("formattedValue3 else", formattedValue)
      console.log('searchValue3 else', searchValue)
      const filteredIngredientsByInput = ingredients.filter(ingredient => ingredient.cooking_effect === cookingEffect && ingredient.name.includes(formattedValue))
      setFilteredIngredients(filteredIngredientsByInput)
      console.log("formattedValue4 else", formattedValue)
      console.log('searchValue4 else', searchValue)
    }
  }

  const loading = isLoading ? <div className="loading"><p className="loading-msg">Loading...</p><img className="loading-img" src={divineBeasts} alt="divine-beasts-img" /> </div> : null 

  return (
    <main className="main-container">
      <Switch>
      <Route 
          exact path="/" 
          render={() => {
            return <div>
              <Welcome />
            </div>
          }} 
        />
        <Route 
          exact path="/home" 
          render={() => {
            return <div>
              <Header />
              {loading}
              {error && <p className="app-error">{error}</p>}
              <Dropdown 
                allCookingEffects={allCookingEffects} 
                handleEffectSelect={handleEffectSelect} 
                cookingEffect={cookingEffect}
              />
              <Search 
                handleSearchValueInput={handleSearchValueInput} 
                searchValue={searchValue}
              />
              {searchValue && !filteredIngredients.length && <p className="no-ingr-msg">No ingredients match your search! Try searching by a different name, or filtering by cooking effect. </p>}
              <Ingredients 
                ingredients={!cookingEffect && !searchValue ? ingredients : filteredIngredients} 
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
              {loading}
              {error && <p className="app-error">{error}</p>}
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
