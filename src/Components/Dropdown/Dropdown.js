import React from 'react';
import './Dropdown.css';

const Dropdown = ({ ingredients, setCookingEffect, handleEffectSelect }) => {

  const cookingEffects = [...ingredients]
    .reduce((acc, ingredient) => {
      if (!acc.includes(ingredient.cooking_effect)) {
      acc.push(ingredient.cooking_effect)
      }
      return acc;
    }, [])
    .sort()
    .map(cookEffect => <option value={cookEffect} key={cookEffect}>{cookEffect}</option>)

  console.log("reduce", cookingEffects)

  // const handleClick = (e) => {
  //   e.preventDefault()
  //   filterIngredients()
  // }

  return (
    <div className="form-container">
      <form>
        <select onChange={(e) => handleEffectSelect(e.target.value)}>
          <option value="select">Select a Cooking Effect</option>
          <option value="">All Cooking Effects</option>
            {cookingEffects}
        </select>
        {/* <button className="get-ingredients" onClick={(e) => handleClick(e)}>Get Ingredients!</button> */}
      </form>
    </div>
  )
}

export default Dropdown;

