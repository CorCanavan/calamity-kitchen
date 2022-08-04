import React from 'react';
import './Dropdown.css';

const Dropdown = ({ ingredients, cookingEffect, setCookingEffect, filterIngredients }) => {

  // const allCookingEffects = ingredients.map(ingredient => ingredient.cooking_effect)
  // console.log("allCE", allCookingEffects);

  const cookingEffects = [...ingredients]
    .reduce((acc, ingredient) => {
      if (!acc.includes(ingredient.cooking_effect)) {
      acc.push(ingredient.cooking_effect)
      }
      // console.log("acc", acc)
      return acc;
    }, [])
    .sort()
    // console.log("sorted", cookingEffects)
    // .splice(0, 1, 'N/A')
    // console.log("spliced", cookingEffects)
    .map(cookEffect => {
      return (
        <option value={cookEffect || 'N/A'} key={cookEffect || 'N/A'}>{cookEffect || 'No Effect'}</option>
      )
    })

  console.log("reduce", cookingEffects)

  const handleClick = (e) => {
    e.preventDefault()
    filterIngredients()
  }

  return (
    <div className="form-container">
      <form>
        <select onChange={(e) => setCookingEffect(e.target.value)}>
          <option value="select">Select a Cooking Effect</option>
          <option value="">All Cooking Effects</option>
            {cookingEffects}
        </select>
        <button className="get-ingredients" onClick={(e) => handleClick(e)}>Get Ingredients!</button>
      </form>
    </div>
  )
}

export default Dropdown;

