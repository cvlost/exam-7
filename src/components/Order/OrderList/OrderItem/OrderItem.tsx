import React from 'react';
import './OrderItem.css';

interface Props {
  name: string;
  count: number;
  price: number;
  deleteItem: React.MouseEventHandler;
}

const OrderItem: React.FC<Props> = ({name, count, price, deleteItem}) => {
  return (
    <div className="OrderItem">
      <span className="OrderItem-name">{name}</span>
      <span className="OrderItem-count">x{count}</span>
      <span className="OrderItem-price">{price} KGS</span>
      <button className="OrderItem-btn" onClick={deleteItem}>X</button>
    </div>
  );
};

export default OrderItem;