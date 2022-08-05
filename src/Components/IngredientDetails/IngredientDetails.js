import React from 'react';
import './IngredientDetails.css';
import { Link } from 'react-router-dom';

const IngredientDetails = ({ category, name, cooking_effect, description, common_locations, hearts_recovered, image, id }) => {

    // let locations = common_locations.join(', ')
    // console.log("locations", locations)
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
            <p><strong>Common Locations:</strong> {common_locations} </p>
            <p><strong>Cooking Effect:</strong> {cooking_effect} </p>
            <p><i>{description}</i></p>
            <p><strong>Hearts Recovered:</strong> {hearts_recovered}</p>
          </div>
        </article>
        <article className="button-container">
          <Link to="/">
            <button className="back-btn">BACK</button>
          </ Link>
        </article>
      </section>
    </div>
  )
}

export default IngredientDetails;