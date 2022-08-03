import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ category, name, cooking_effect, description, common_locations, hearts_recovered, image, id }) => {

  return (
    <div className="card">
      <h2>Ingredient: {name}</h2>
      <img src={image} />
      <h3>Cooking Effect: {cooking_effect}</h3>
    </div>
  )
}

export default Card;