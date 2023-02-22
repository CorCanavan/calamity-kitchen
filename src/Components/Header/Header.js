import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header>
        <Link to="/main">
          <h1 className="header-title">Calamity Kitchen</h1>
        </Link>
      </header>
  )
}

export default Header;