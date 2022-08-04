import React from 'react';
import './Dropdown.css';

const Dropdown = ({ ingredients }) => {

  // const allCookingEffects = ingredients.map(ingredient => ingredient.cooking_effect)
  // console.log("allCE", allCookingEffects);

  const cookingEffects = [...ingredients]
    .reduce((acc, ingredient) => {
      if (!acc.includes(ingredient.cooking_effect) && ingredient.cooking_effect) {
      acc.push(ingredient.cooking_effect)
      }
      return acc;
    }, [])
    .sort((a, b) => a.localeCompare(b))
    .map(cookingEffect => {
      return (
        <option value={cookingEffect} key={cookingEffect}>{cookingEffect}</option>
      )
    })

  console.log("reduce", cookingEffects)

  return (
    <form>
      <select>
        <option value="select">Select a Cooking Effect</option>
          {cookingEffects}
      </select>
    </form>
  )
}

export default Dropdown;

