import { FC } from 'react';
import { Link } from 'react-router-dom';
// Icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart';

const Header: FC = () => {
    return (
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src="./logo.svg" alt="Logo" width="50" height="28" />
                </Link>
                <div className="navbar-burger" data-target="navbarExampleTransparentExample">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-start mx-auto">
                    <Link to="/" className="navbar-item">
                        Home
                    </Link>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <Link to="/shop" className="navbar-link">
                            Shop
                        </Link>

                        <div className="navbar-dropdown is-boxed">
                            <Link to="/shop" className="navbar-item">
                                Women
                            </Link>
                            <Link to="/shop" className="navbar-item">
                                Men
                            </Link>
                            <Link to="/shop" className="navbar-item">
                                Jackets
                            </Link>
                        </div>
                    </div>
                    <Link to="/blog" className="navbar-item">
                        Blog
                    </Link>
                    <Link to="/contact" className="navbar-item" >
                        Contact
                    </Link>
                </div>
                <div className="navbar-end ml-0">
                    <Link to="/" className="navbar-item">
                        <FontAwesomeIcon icon={faSearch} size="lg"></FontAwesomeIcon>
                    </Link>
                    <Link to="/signin" className="navbar-item">
                        <FontAwesomeIcon icon={faUser} size="lg"></FontAwesomeIcon>
                    </Link>
                    <Link to="/" className="navbar-item">
                        <FontAwesomeIcon icon={faShoppingCart} size="lg"></FontAwesomeIcon>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;
