import React from 'react';
import './Dropdown.css';

const Dropdown = ({ ingredients, handleEffectSelect }) => {

  const cookingEffects = [...ingredients]
    .reduce((acc, ingredient) => {
      if (!acc.includes(ingredient.cooking_effect)) {
      acc.push(ingredient.cooking_effect)
      }
      return acc;
    }, [])
    .sort()
    .map(cookEffect => <option value={cookEffect} key={cookEffect}>{cookEffect}</option>)

  return (
    // <div className="form-container">
      <form>
        <select onChange={(e) => handleEffectSelect(e.target.value)}>
          <option value="select">Select a Cooking Effect</option>
          <option value="">All Cooking Effects</option>
            {cookingEffects}
        </select>
      </form>
    // </div>
  )
}

export default Dropdown;

