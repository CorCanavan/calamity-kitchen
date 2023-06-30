import './Recipes.css';
import sitByFire from '../../assets/sitByFireSummer.jpg';


const Recipes = () => {

  return (
    <section className="recipes-page">
      <h2 className="coming-soon">Coming Soon: Recipes Page!</h2>
      <p className="recipes-blurb">A place to store your favorite recipes for easy in-game reference.</p>
      <img className="link-by-fire" src={sitByFire} alt="Link waiting by fire"/>
    </section>
  )
}

export default Recipes;