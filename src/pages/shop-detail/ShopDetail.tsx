import { FC } from 'react';
import image20 from '../../assets/image20.png';
const ShopDetail: FC = () => {
  return <div className="section is-medium">
    <div className="columns">
      <div className="column">
        <h1 className="title">Apple Watch Series 5 Hermes</h1>
        <p className="subtitle">Series 5 Apple Watch Hermes 44 mm case in Space Black stainless steel & Rallye single tour band in Black Gala calfskin…</p>
        <p className="subtitle">Product details</p>
        <p className="subtitle">Care</p>
        <p className="subtitle">Delivery & returns</p>
        <p className="subtitle">gitting</p>
        <button className="button">Shop now</button>
      </div>
      <div className="column" style={{maxHeight: '400px', overflow: 'auto'}}>
        <figure className="image">
          <img src={image20} alt="" />
        </figure>
        <figure className="image">
          <img src={image20} alt="" />
        </figure>
        <figure className="image">
          <img src={image20} alt="" />
        </figure>
      </div>
    </div>
  </div>;
};

export default ShopDetail;
