import React from 'react';
import './Ingredients.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Ingredients = ({ ingredients }) => {
  const ingredientCards = ingredients.map(ingredient => {
    return (
      <Card 
        name={ingredient.name}
        image={ingredient.image}
        cooking_effect={ingredient.cooking_effect}
        id={ingredient.id}
        key={ingredient.id}
      />
    )
  })
  return (
    <div className="ingredients-container">
      {ingredientCards}
    </div>
  )
}

export default Ingredients;

Ingredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.object)
}