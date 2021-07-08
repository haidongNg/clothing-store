import { FC } from 'react'

const Footer: FC = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="columns px-6">
                    <div className="column">
                        <div className="content">
                            <h1>Clay Shop</h1>
                            <p>Fashion is a popular aesthetic expression at a particular time, place and in a specific context, especially in clothing, footwear, lifestyle, accessories, makeup.</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <h1>Hot links</h1>
                            <p><a href="#a">Home</a></p>
                            <p><a href="#a">Shop</a></p>
                            <p><a href="#a">Blog</a></p>
                            <p><a href="#a">Contact</a></p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <h1>More info</h1>
                            <p>How it works</p>
                            <p>About us</p>
                            <p>Decline rules</p>
                            <p>Terms & Conditions</p>
                        </div>
                    </div>
                    <div className="column">
                        <div className="content">
                            <h1>Customer care</h1>
                            <p>FAQ</p>
                            <p>Tems of use</p>
                            <p>Private Policy</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
