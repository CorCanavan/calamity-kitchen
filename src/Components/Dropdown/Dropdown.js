import React from 'react';
import './Dropdown.css';
import PropTypes from 'prop-types';

const Dropdown = ({ allCookingEffects, handleEffectSelect }) => {

  const cookingEffectOptions = allCookingEffects.map(cookEffect => <option value={cookEffect} key={cookEffect}>{cookEffect}</option>)

  return (
      <form>
        <select onChange={(e) => handleEffectSelect(e.target.value)}>
          <option value="select">Select a Cooking Effect</option>
          <option value="">All Cooking Effects</option>
            {cookingEffectOptions}
        </select>
      </form>
  )
}

export default Dropdown;

Dropdown.propTypes = {
  allCookingEffects: PropTypes.array
}
