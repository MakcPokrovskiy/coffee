import img from '../../picters/logoPage.svg';
import './header.scss';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <a className="header-logo" href="##">
            <img src={img} alt="logo-page"/>
          </a>
          <nav className="page-menu menu">
            <ul className="menu-list">
              <li className="menu-item">
                <a href="##" className="menu-link">Our coffee</a>
              </li>
              <li className="menu-item">
                <a href="##" className="menu-link">For your pleasure</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  )
}

export default Header;
