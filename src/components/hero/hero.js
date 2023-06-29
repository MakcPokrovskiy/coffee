import './hero.scss';
import BeansLogo from '../home-svg-selectors/beansLogo.js'
const HeroSection = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">Everything You Love About Coffee</h1>
          <div className="beansLogo">
            <BeansLogo/>
          </div>
          <p className="hero-descr">We makes every day full of energy and taste <br/> Want to try our beans?</p>
          <button className="hero-more">More</button>
        </div>
      </section>
    </>
  )
}

export default HeroSection;
