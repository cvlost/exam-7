import React from 'react';
import {MENU_ITEMS} from "../../lib/MENU_ITEMS";
import {uKey} from "../../lib/uKey";
import MenuItem from "./MenuItem/MenuItem";

interface Props {
  addOrder: (name: string) => void;
}

const Menu: React.FC<Props> = ({addOrder}) => {
  return (
    <div>
      {MENU_ITEMS.map(item => (
        <MenuItem key={uKey()}
                  name={item.name}
                  img={item.image}
                  price={item.price}
                  addOrder={() => addOrder(item.name)}/>
      ))}
    </div>
  );
};

export default Menu;