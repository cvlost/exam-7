import React, {useState} from 'react';
import {MENU_ITEMS} from "../lib/MENU_ITEMS";
import Menu from "../components/Menu/Menu";
import Order from "../components/Order/Order";
import './App.css';

function App() {
  const [orders, setOrders] = useState<OrderRecord[]>(MENU_ITEMS.map(item => {
    return {name: item.name, count: 0};
  }));

  const addOrder = (name: string) => {
    setOrders(prev => prev.map(record => {
      if (record.name !== name) return record;
      return {...record, count: record.count + 1};
    }));
  };

  const resetRecord = (name: string) => {
    setOrders(prev => prev.map(record => {
      if (record.name !== name) return record;
      return {...record, count: 0};
    }));
  };

  return (
    <div className="App">
      <Menu addOrder={addOrder}/>
      <Order list={orders} resetRecord={resetRecord}/>
    </div>
  );
}

export default App;
