import { FC } from "react";
import image17 from '../../assets/image17.png';
import image20 from '../../assets/image20.png';
const Home: FC = () => {
    return (
        <>
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
                <div className="ct-mw-container">
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
            {/* slideshow */}
            <div className="section section--slideshow">
                <div className="slideshow-container">
                    <div className="mySlides fade">
                        {/* <div className="numbertext">1 / 3</div>
            <img src={image17} alt="" />
            <div className="text">Caption Text</div> */}


                        <div className="is-flex is-flex-direction-row is-justify-content-space-around is-flex-wrap-nowrap">
                            <div className="p-2">
                                <figure className="image">
                                    <img src={image17} alt="" />
                                </figure>
                                {/* <div className="numbertext">1 / 3</div>
                <img src={image17} alt="" />
                <div className="text">Caption Text</div> */}
                            </div>
                            <div className="p-2">
                                <figure className="image">
                                    <img src={image17} alt="" />
                                </figure>
                            </div>
                            <div className="p-2">
                                <figure className="image">
                                    <img src={image17} alt="" />
                                </figure>
                            </div>
                            <div className="p-2">
                                <figure className="image">
                                    <img src={image17} alt="" />
                                </figure>
                            </div>
                        </div>
                    </div>
                    <div className="mySlides fade">
                        {/* <div className="numbertext">1 / 3</div>
            <img src={image17} alt="" />
            <div className="text">Caption Text</div> */}
                    </div>
                    <a href="#a" className="prev">&#10094;</a>
                    <a href="#a" className="next" >&#10095;</a>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div>
            </div>


            {/*  */}
            <div className="section">
                <div className="columns is-multiline columns--your-my-like">
                    <div className="column is-3">
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
                                <a href="#a" className="card-footer-item">Show now</a>
                            </footer>
                        </div>
                    </div>
                    <div className="column is-3">
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
                                <a href="#a" className="card-footer-item">Show now</a>
                            </footer>
                        </div>
                    </div>
                    <div className="column is-3">
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
                                <a href="#a" className="card-footer-item">Show now</a>
                            </footer>
                        </div>
                    </div>
                    <div className="column is-3">
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
                                <a href="#a" className="card-footer-item">Show now</a>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
