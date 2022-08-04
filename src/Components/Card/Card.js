import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

const Card = ({ category, name, cooking_effect, description, common_locations, hearts_recovered, image, id }) => {

  return (
    <div className="card">
      <h2 className="ingredient-name">{name}</h2>
      <img className="ingredient-image" src={image} />
      <p className="cooking-effect">Cooking Effect: {!cooking_effect ? 'N/A' : cooking_effect}</p>
    </div>
  )
}

export default Card;