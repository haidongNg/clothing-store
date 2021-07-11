import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import image20 from '../../assets/image20.png';
import { connect } from 'react-redux';
import { getAllProduct } from '../../store/actions/index';
import { Product } from '../../models';

// Type Props
type ShopProps = {
  getAllProduct: (callback: (val: Product[]) => void) => void;
}

// Component
const Shop: FC<ShopProps> = (props) => {
  const [productList, setProductList] = useState<Product[]>([]);

  useEffect(() => {
    props.getAllProduct((val: Product[]) => {
      if (val) {
        setProductList(val);
      }
    });
  // eslint-disable-next-line
  }, []);

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
            {productList.map((item: Product, index: number) => (
              <div className="column is-4" key={index}>
                <div className="card card-ct-product">
                  <div className="card-image">
                    <figure className="image is-4by3">
                      <img src={image20} alt="Placeholder" />
                    </figure>
                  </div>
                  <div className="card-content">
                    <div className="content">
                      <h1 className="title">{item.name}</h1>
                    </div>
                  </div>
                  <footer className="card-footer card-footer-ct-product">
                    <a href="#a" className="card-footer-item">
                      <h1 className="title is-4">${item.price}</h1>
                    </a>
                    <Link to="/shop/1" className="card-footer-item">
                      Show now
                    </Link>
                  </footer>
                </div>
              </div>
            ))}
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

const connector = connect(null, { getAllProduct });

export default connector(Shop);
