import './Header.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <div className="title-container">
          <Link to="/home">
            <h1 className="header-title">Calamity Kitchen</h1>
          </Link>
      </div>
      <div className="nav-link-container">
          <NavLink to="/home">
            <p className="nav-links">Home</p>
          </NavLink>
          <NavLink to="/recipes">
            <p className="nav-links">Recipes</p>
          </NavLink>
      </div>
    </header>
  )
}

export default Header;