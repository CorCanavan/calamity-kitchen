import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {

  return (
    <div className="error-page">
      <p className="error-msg">Uh oh! The page you are looking for doesn't exist.</p>
      <Link to="/">Click here to go back to the main page.</Link>
    </div>
  )
}