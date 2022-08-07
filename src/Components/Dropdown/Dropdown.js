import React from 'react';
import './Dropdown.css';
import PropTypes from 'prop-types';

const Dropdown = ({ allCookingEffects, handleEffectSelect }) => {

  // const cookingEffectsCaps = allCookingEffects.map(element => element.charAt(0).toUpperCase() + element.slice(1).toLowerCase())
  // console.log("cookingCaps", cookingEffectFormat)

  const capitalizeCookingEffect = (effectString) => {
    return effectString.charAt(0).toUpperCase() + effectString.slice(1).toLowerCase()
  } 

  const cookingEffectOptions = allCookingEffects.map(cookEffect => <option value={cookEffect} key={cookEffect}>{capitalizeCookingEffect(cookEffect)}</option>)

  return (
      <form>
        <select onChange={(e) => handleEffectSelect(e.target.value)}>
          <option value="select">Select a Cooking Effect:</option>
          <option value="">All Cooking Effects</option>
            {cookingEffectOptions}
        </select>
      </form>
  )
}

export default Dropdown;

Dropdown.propTypes = {
  allCookingEffects: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleEffectSelect: PropTypes.func.isRequired
}
