import React from 'react';
import './Ingredients.css';
import Card from '../Card/Card';
import PropTypes from 'prop-types';

const Ingredients = ({ ingredients }) => {
  const ingredientCards = ingredients.map(ingredient => {
    return (
      <Card 
        category={ingredient.category}
        common_locations={ingredient.common_locations}
        cooking_effect={ingredient.cooking_effect}
        description={ingredient.description}
        hearts_recovered={ingredient.hearts_recovered}
        id={ingredient.id}
        key={ingredient.id}
        image={ingredient.image}
        name={ingredient.name}
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
  ingredients: PropTypes.array
}