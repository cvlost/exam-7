import React from 'react';
import {MENU_ITEMS} from "../../../lib/MENU_ITEMS";
import OrderItem from "./OrderItem/OrderItem";

interface Props {
  list: OrderRecord[];
  resetRecord: (name: string) => void;
}

let u = 0;

const OrderList: React.FC<Props> = ({list, resetRecord}) => {
  return (
    <div>
      {list.map(record => {
        if (!record.count) return null;
        const price = record.count * MENU_ITEMS.find(item => item.name === record.name)!.price;
        return <OrderItem key={(u++).toString()}
                          name={record.name}
                          count={record.count}
                          price={price}
                          deleteItem={() => resetRecord(record.name)}/>
      })}
    </div>
  );
};

export default OrderList;