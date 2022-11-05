import React from 'react';

interface Props {
  name: string;
  count: number;
  price: number;
  deleteItem: React.MouseEventHandler;
}

const OrderItem: React.FC<Props> = ({name, count, price, deleteItem}) => {
  return (
    <div>
      <span>{name}</span>
      <span>{count}</span>
      <span>{price}</span>
      <button onClick={deleteItem}>Delete</button>
    </div>
  );
};

export default OrderItem;