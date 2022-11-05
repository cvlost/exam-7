import React from 'react';
import TotalPrice from "./TotalPrice/TotalPrice";
import OrderList from "./OrderList/OrderList";
import './Order.css';

interface Props {
  list: OrderRecord[];
  resetRecord: (name: string) => void;
}

const Order: React.FC<Props> = ({list, resetRecord}) => {
  if (list.every(record => record.count === 0))
    return (
      <div className="Order-empty">
        <div className="Order-placeholder">Order something already!</div>
      </div>
    );

  return (
    <div className="Order">
      <OrderList list={list} resetRecord={resetRecord}/>
      <TotalPrice list={list}/>
    </div>
  );
};

export default Order;