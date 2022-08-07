import React from 'react';
import './Dropdown.css';
import PropTypes from 'prop-types';

const Dropdown = ({ allCookingEffects, handleEffectSelect }) => {

  const capitalizeCookingEffect = (effectString) => {
    const revisedEffect = effectString.split(" ")
    return revisedEffect.map(effect => {
      return effect[0].toUpperCase() + effect.substring(1)
    }).join(" ")
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
