import { FC } from 'react';
import { Link } from 'react-router-dom';
import image20 from '../../assets/image20.png';
const Shop: FC = () => {
  return (
    <div>
      <div className="section">
        <div className="container">
          <div className="is-flex is-flex-direction-row is-justify-content-flex-start">
            <div className="field">
              <label className="label">Show</label>
              <div className="control">
                <div className="select is-normal">
                  <select>
                    <option>Popular</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="field">
              <label className="label">Price</label>
              <div className="control">
                <div className="select is-normal">
                  <select>
                    <option>Any</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="field">
              <label className="label">Brand</label>
              <div className="control">
                <div className="select is-normal">
                  <select>
                    <option>Any</option>
                    <option>With options</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="columns is-multiline">
            <div className="column is-4">
              <div className="card card-ct-product">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={image20} alt="Placeholder" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h1 className="title">Women's blackvest Gucci</h1>
                  </div>
                </div>
                <footer className="card-footer card-footer-ct-product">
                  <a href="#a" className="card-footer-item">
                    <h1 className="title is-4">$715</h1>
                  </a>
                  <Link to="/shop/1" className="card-footer-item">
                    Show now
                  </Link>
                </footer>
              </div>
            </div>
            <div className="column is-4">
              <div className="card card-ct-product">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={image20} alt="Placeholder" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h1 className="title">Women's blackvest Gucci</h1>
                  </div>
                </div>
                <footer className="card-footer card-footer-ct-product">
                  <a href="#a" className="card-footer-item">
                    <h1 className="title is-4">$715</h1>
                  </a>
                  <a href="#a" className="card-footer-item">
                    Show now
                  </a>
                </footer>
              </div>
            </div>
            <div className="column is-4">
              <div className="card card-ct-product">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={image20} alt="Placeholder" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h1 className="title">Women's blackvest Gucci</h1>
                  </div>
                </div>
                <footer className="card-footer card-footer-ct-product">
                  <a href="#a" className="card-footer-item">
                    <h1 className="title is-4">$715</h1>
                  </a>
                  <a href="#a" className="card-footer-item">
                    Show now
                  </a>
                </footer>
              </div>
            </div>
            <div className="column is-4">
              <div className="card card-ct-product">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={image20} alt="Placeholder" />
                  </figure>
                </div>
                <div className="card-content">
                  <div className="content">
                    <h1 className="title">Women's blackvest Gucci</h1>
                  </div>
                </div>
                <footer className="card-footer card-footer-ct-product">
                  <a href="#a" className="card-footer-item">
                    <h1 className="title is-4">$715</h1>
                  </a>
                  <a href="#a" className="card-footer-item">
                    Show now
                  </a>
                </footer>
              </div>
            </div>
          </div>
          <nav
            className="pagination is-centered"
            role="navigation"
            aria-label="pagination"
          >
            <a
              href="#a"
              className="pagination-previous"
              title="This is the first page"
            >
              Previous
            </a>
            <a href="#a" className="pagination-next">
              Next page
            </a>
            <ul className="pagination-list">
              <li>
                <a
                  href="#a"
                  className="pagination-link is-current"
                  aria-label="Page 1"
                  aria-current="page"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#a"
                  className="pagination-link"
                  aria-label="Goto page 2"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#a"
                  className="pagination-link"
                  aria-label="Goto page 3"
                >
                  3
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Shop;
