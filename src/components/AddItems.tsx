import React from 'react';
import {Item} from '../types';
import MenuItem from './MenuItem';

interface AddItemsProps {
  items: Item[];
  addItem: (itemName: string) => void;
}

const AddItems: React.FC<AddItemsProps> = ({items, addItem}) => {
  return (
    <div className="AddItems">
      {items.map(item => (
        <MenuItem
          key={item.name}
          name={item.name}
          price={item.price}
          image={item.image}
          addItem={addItem}
        />
      ))}
    </div>
  );
};

export default AddItems;
