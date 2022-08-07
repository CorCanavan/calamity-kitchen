import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import cookingSound from '../../assets/cookingSuccess.mp3';

const Card = ({ name, cooking_effect, image, id }) => {

  const audio = new Audio(cookingSound)

  const start = () => {
    audio.play()
  }

  return (
    <Link to={`/ingredient/${id}`}>
      <div className="card">
        <h2 className="ingredient-name">{name}</h2>
        <img className="ingredient-image" src={image} alt={name} onClick={start}/>
        <p className="cooking-effect">Cooking Effect: {cooking_effect} </p>
      </div>
    </ Link>
  )
}

export default Card;

// do these props need isRequired?

Card.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  cooking_effect: PropTypes.string.isRequired
}