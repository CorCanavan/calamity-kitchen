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
            <h2 className="nav-links">Home</h2>
          </NavLink>
          <NavLink to="/recipes">
            <h2 className="nav-links">Recipes</h2>
          </NavLink>
        </div>
        {/* <div className="title-container">
          <Link to="/home">
            <h1 className="header-title">Calamity Kitchen</h1>
          </Link>
        </div> */}
      </header>
  )
}

export default Header;