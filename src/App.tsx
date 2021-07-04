import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';
import image17 from '../src/assets/image17.png';
const App: FC = () => {
  return (
    <div>
      <nav className="navbar is-transparent">
        <div className="navbar-brand">
          <a href="#a" className="navbar-item">
            <img src="./logo.svg" alt="Bulma: a modern CSS framework based on Flexbox" width="50" height="28" />
          </a>
          <div className="navbar-burger" data-target="navbarExampleTransparentExample">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navbarExampleTransparentExample" className="navbar-menu">
          <div className="navbar-start mx-auto">
            <a className="navbar-item" href="#a">
              Home
            </a>
            <div className="navbar-item has-dropdown is-hoverable">
              <a href="#a" className="navbar-link">
                Shop
              </a>

              <div className="navbar-dropdown is-boxed">
                <a href="#a" className="navbar-item">
                  Women
                </a>
                <a href="#a" className="navbar-item">
                  Men
                </a>
                <a href="#a" className="navbar-item">
                  Jackets
                </a>
              </div>
            </div>
            <a className="navbar-item" href="#a">
              Blog
            </a>
            <a className="navbar-item" href="#a">
              Contact
            </a>
          </div>
          <div className="navbar-end ml-0">
            <a href="#a" className="navbar-item">
              <FontAwesomeIcon icon={faSearch} size="lg"></FontAwesomeIcon>
            </a>
            <a href="#a" className="navbar-item">
              <FontAwesomeIcon icon={faUser} size="lg"></FontAwesomeIcon>
            </a>
            <a href="#a" className="navbar-item">
              <FontAwesomeIcon icon={faShoppingCart} size="lg"></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </nav>
      <section className="section p-0 section--ct-hero">
        <div className="ct-hero-main p-6">
          <div className="ct-hero-content">
            <h1 className="title has-text-white">Admire Stylish
              Dresses & Looks</h1>
            <h2 className="subtitle has-text-white">
              If we wanted to build a human-level tool to offer
              automated outfit advice, we needed to understand
              people’s fashion taste.
            </h2>
            <button className="button button--ct-transparent">Show more</button>
          </div>
          <img src={image17} className="ct-hero-image" alt=""></img>
        </div>

      </section>

      {/* Collection */}
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="ct-collection ct-collection-image-1 p-6">
                <h1 className="title has-text-white">Women Collection</h1>
                <h2 className="subtitle has-text-white">Spring 2020</h2>
              </div>
            </div>
            <div className="column">
              <div className="columns">
                <div className="column" >
                  <div className="ct-collection ct-collection-image-2 p-6">
                    <h2 className="subtitle">24 items</h2>
                    <h1 className="title mt-6">Bestsellers</h1>

                  </div>
                </div>
                <div className="column" >
                  <div className="ct-collection ct-collection-image-3 p-6">
                    <h1 className="title is-4 has-text-white">New</h1>
                    <h1 className="title has-text-white mt-6">Dresses</h1>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column" >
                  <div className="ct-collection ct-collection-image-4 p-6">
                    <h1 className="title is-4 has-text-white">New</h1>
                    <h1 className="title has-text-white mt-6">Denim Jackets</h1>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default App;
