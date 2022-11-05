import React from 'react';
import {MENU_ITEMS} from "../../lib/MENU_ITEMS";
import MenuItem from "./MenuItem/MenuItem";

interface Props {
  addOrder: (name: string) => void;
}

let u = 0;

const Menu: React.FC<Props> = ({addOrder}) => {
  return (
    <div>
      {MENU_ITEMS.map(item => (
        <MenuItem key={(u++).toString()}
                  name={item.name} img={item.image}
                  price={item.price}
                  addOrder={() => addOrder(item.name)}/>
      ))}
    </div>
  );
};

export default Menu;