import React from 'react';
import './IngredientDetails.css';

const IngredientDetails = ({ category, name, cooking_effect, description, common_locations, hearts_recovered, image, id }) => {

  return (
    <div className="details">
      <h2>{name}</h2>

    </div>
  )
}

export default IngredientDetails;