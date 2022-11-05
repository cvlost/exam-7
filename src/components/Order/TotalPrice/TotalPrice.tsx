import React from 'react';
import {MENU_ITEMS} from "../../../lib/MENU_ITEMS";

interface Props {
  list: OrderRecord[];
}

const TotalPrice: React.FC<Props> = ({list}) => {
  const totalPrice = list.reduce((acc, record) => {
    return acc + record.count * MENU_ITEMS.find(item => item.name === record.name)!.price;
  }, 0)

  if (!totalPrice) return null;

  return (
    <div>
      Total price: <span>{totalPrice}</span>
    </div>
  );
};

export default TotalPrice;