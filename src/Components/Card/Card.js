import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Card = ({ name, cooking_effect, image, id }) => {

  return (
    <Link to={`/ingredient/${id}`}>
      <div className="card">
        <h2 className="ingredient-name">{name}</h2>
        <img className="ingredient-image" src={image} alt={name} />
        <p className="cooking-effect">Cooking Effect: {cooking_effect} </p>
      </div>
    </ Link>
  )
}

export default Card;

// do these props need isRequired?

Card.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  cooking_effect: PropTypes.string
}