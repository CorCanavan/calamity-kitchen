import React, { useState } from 'react';
import './IngredientDetails.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const IngredientDetails = ({ category, name, cooking_effect, description, common_locations, hearts_recovered, image }) => {

  return (
    <div className="details-wrapper">
      <section className="details-container">
        <article className="ingredient-info">
          <div className="img-wrapper">
            <img className="details-img" src={image} alt={name}/>
          </div>
          <div className="details-info">
            <h2>{name}</h2>
            <p><strong>Category:</strong> {category} </p>
            <p><strong>Common Locations:</strong> {common_locations ? common_locations.join(', ') : null } </p>
            <p><strong>Cooking Effect:</strong> {cooking_effect} </p>
            <p><i>{description}</i></p>
            <p><strong>Hearts Recovered:</strong> {hearts_recovered}</p>
          </div>
        </article>
        <article className="button-container">
          <Link to="/" className="link">
            <button className="back-btn">BACK</button>
          </ Link>
        </article>
      </section>
    </div>
  )
}

export default IngredientDetails;

IngredientDetails.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  cooking_effect: PropTypes.string,
  category: PropTypes.string,
  description: PropTypes.string,
  common_locations: PropTypes.array,
  hearts_recovered: PropTypes.number
}