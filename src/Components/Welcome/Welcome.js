import './Welcome.css';
import cookingLink from '../../assets/cookingLink.gif';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <section className="welcome-wrapper">
      <section className="welcome-container">
        <h1 className="welcome-title">Welcome to <div className="calamity-kitchen">Calamity Kitchen</div></h1>
        <div className="blurb-wrapper">
          <p className="welcome-blurb">
          In the video game <i>Zelda: Breath of the Wild</i>, there’s enough to worry about between freeing the Divine Beasts and defeating Calamity Ganon, so we’re here to take the stress out of cooking in the game! 
          </p><br></br>
          <p className="welcome-blurb">
          If you’ve played the game before, you may know that cooking can yield you a plentiful meal with strong effects, or you may end up with the dreaded “dubious food” - a concoction with no beneficial effects that causes Link to squirm as he eats!
          </p><br></br>
          <p className="welcome-blurb">
          Click the button below to use the dropdown to filter ingredients by effect. Cooking ingredients together with similar effects produces meals with a powerful boost. Don't know the effect? No problem! Use the search bar to find an ingredient by name. Click on an ingredient card for more details - where to find it in the game, how many hearts it restores, and more.
          </p>
        </div>
        <div className="gif-wrapper">
          <img className="welcome-gif" src={cookingLink} alt="Link cooking gif" />
        </div>
        <Link to="/home">
          <button className="lets-get-cooking-btn">Let's Get Cooking!</button>
        </Link>
      </section>
    </section>
  )
}

export default Welcome;