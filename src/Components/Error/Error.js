import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';
import gameOver from '../../assets/gameOver.jpeg'

const Error = () => {

  return (
    <div className="error-page">
      <h2 className="four-oh-four">404 Error</h2>
      <p className="error-page-msg">Uh oh! This page doesn't exist.</p>
      <Link to="/home" className="error-page-link">Click here to go back to the homepage.</ Link>
      <img className="error-image" src={gameOver} alt="game-over-404" />
    </div>
  )
}

export default Error;