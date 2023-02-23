import './Welcome.css';
import Owgc from '../../assets/Owgc.gif';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="welcome-wrapper">
      <section className="welcome-container">
        <h1 className="welcome-title">Welcome to Calamity Kitchen</h1>
        <p className="welcome-blurb">
        Blurb about app. 
        </p>
        <div className="gif-wrapper">
          <img className="welcome-gif" src={Owgc} alt="Link cooking gif" />
        </div>
        <Link to="/main">
          <button className="lets-get-cooking-btn">Let's Get Cooking!</button>
        </Link>
      </section>
    </section>
  )
}

export default Welcome;