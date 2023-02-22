import './Welcome.css';
import Owgc from '../../assets/Owgc.gif';

const Welcome = () => {
  return (
    <section className="welcome-wrapper">
      <section className="welcome-container">
        <h1 className="welcome-title">Welcome to Calamity Kitchen</h1>
        <p className="welcome-blurb">
        Blurb about app. 
        </p>
        <img className="welcome-gif" src={Owgc} alt="Link cooking gif" />
      </section>
    </section>
  )
}

export default Welcome;