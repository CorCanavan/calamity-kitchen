import React from 'react';
import './Dropdown.css';

const Dropdown = ({ ingredients, cookingEffect, setCookingEffect, filterIngredients }) => {

  // const allCookingEffects = ingredients.map(ingredient => ingredient.cooking_effect)
  // console.log("allCE", allCookingEffects);

  const cookingEffects = [...ingredients]
    .reduce((acc, ingredient) => {
      if (!acc.includes(ingredient.cooking_effect) && ingredient.cooking_effect) {
      acc.push(ingredient.cooking_effect)
      }
      // console.log("acc", acc)
      return acc;
    }, [])
    .sort()
    .map(cookEffect => {
      return (
        <option value={cookEffect} key={cookEffect}>{cookEffect}</option>
      )
    })

  console.log("reduce", cookingEffects)

  const handleClick = (e) => {
    e.preventDefault()
    filterIngredients()
  }

  return (
    <form>
      <select onChange={(e) => setCookingEffect(e.target.value)}>
        <option value="select">Select a Cooking Effect</option>
          {cookingEffects}
      </select>
      <button className="get-ingredients" onClick={(e) => handleClick(e)}>Get Ingredients!</button>
    </form>
  )
}

export default Dropdown;

