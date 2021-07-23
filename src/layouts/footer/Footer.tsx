import { FC } from 'react'
import { Column, Row } from '../../core/styles/base.style';
import { FoolterContainer } from './Footer.style';
const Footer: FC = () => {
    return (
        <FoolterContainer>
            <Row>
                <Column>
                    <div className="content">
                        <h1>Clay Shop</h1>
                        <p>Fashion is a popular ae</p>
                    </div>
                </Column>
                <Column>
                    <div className="content">
                        <h1>Hot links</h1>
                        <p><a href="#a">Home</a></p>
                        <p><a href="#a">Shop</a></p>
                        <p><a href="#a">Blog</a></p>
                        <p><a href="#a">Contact</a></p>
                    </div>
                </Column>
                <Column>
                    <div className="content">
                        <h1>More info</h1>
                        <p>How it works</p>
                        <p>About us</p>
                        <p>Decline rules</p>
                        <p>Terms & Conditions</p>
                    </div>
                </Column>
                <Column>
                    <div className="content">
                        <h1>Customer care</h1>
                        <p>FAQ</p>
                        <p>Tems of use</p>
                        <p>Private Policy</p>
                    </div>
                </Column>
            </Row>
        </FoolterContainer>
    )
}

export default Footer;
