import './Welcome.css';
import Owgc from '../../assets/Owgc.gif';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="welcome-wrapper">
      <section className="welcome-container">
        <h1 className="welcome-title">Welcome to Calamity Kitchen</h1>
        <div className="blurb-wrapper">
          <p className="welcome-blurb">
          In the video game <i>Zelda: Breath of the Wild</i>, cooking ingredients together with the same effect produces meals with a powerful boost. Once you click through below, use the dropdown to filter ingredients by specific effect. Click on an ingredient card for more details - where to find it in the game, how many hearts it restores, and more.
          </p>
        </div>
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