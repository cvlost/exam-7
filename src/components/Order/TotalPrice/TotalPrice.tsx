import React from 'react';
import {MENU_ITEMS} from "../../../lib/MENU_ITEMS";
import './TotalPrice.css';

interface Props {
  list: OrderRecord[];
}

const TotalPrice: React.FC<Props> = ({list}) => {
  const totalPrice = list.reduce((acc, record) => {
    return acc + record.count * MENU_ITEMS.find(item => item.name === record.name)!.price;
  }, 0)

  return (
    <div className="TotalPrice">
      Total price: <span>{totalPrice} KGS</span>
    </div>
  );
};

export default TotalPrice;