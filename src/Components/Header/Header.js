import './Header.css';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {

  return (
    <header>
      <div className="nav-link-container">
          <NavLink to="/home">
            <h2>Home</h2>
          </NavLink>
        </div>
        <Link to="/home">
          <h1 className="header-title">Calamity Kitchen</h1>
        </Link>
      </header>
  )
}

export default Header;