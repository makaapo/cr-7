import React from 'react';
import {Item} from '../types';

interface Props extends Item {
  addItem: (itemName: string) => void;
}

const MenuItem: React.FC<Props> = ({name, price, image, addItem}) => {
  return (
    <div className="MenuItem" onClick={() => addItem(name)}>
      <img className="ButtonImg" src={image} alt={name}/>
      <div>
        <h3>{name}</h3>
        <p>Price: {price} KGS</p></div>
    </div>
  );
};

export default MenuItem;
