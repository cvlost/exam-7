import React from 'react';
import './MenuItem.css';

interface Props {
  name: string;
  img: string;
  price: number;
  addOrder: React.MouseEventHandler;
}

const MenuItem: React.FC<Props> = ({name, img, price, addOrder}) => {
  return (
    <div className="MenuItem">
      <button className="MenuItem-btn" onClick={addOrder}>
        <div className="MenuItem-img-box">
          <img className="MenuItem-img" src={img} alt={name}/>
        </div>
        <div className="MenuItem-info">
          <span className="MenuItem-name">{name}</span>
          <span className="MenuItem-price">Price: <span>{price}</span> KGS</span>
        </div>
      </button>
    </div>
  );
};

export default MenuItem;