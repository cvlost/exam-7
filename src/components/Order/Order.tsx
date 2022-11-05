import React from 'react';
import TotalPrice from "./TotalPrice/TotalPrice";
import OrderList from "./OrderList/OrderList";

interface Props {
  list: OrderRecord[];
  resetRecord: (name: string) => void;
}

const Order: React.FC<Props> = ({list, resetRecord}) => {
  if (list.every(record => record.count === 0))
    return (
      <div>
        empty order!
      </div>
    );

  return (
    <div>
      <OrderList list={list} resetRecord={resetRecord}/>
      <TotalPrice list={list}/>
    </div>
  );
};

export default Order;