import React from 'react';
import {Item} from '../types';

interface Props {
  item: Item;
  onDelete: () => void;
}

const OrderItem: React.FC<Props> = ({item, onDelete}) => {
  return (
    <div className='OrderItem'>
      <img className="ButtonImg" src={item.image} alt={item.name}/>
      {item.name} ({item.quantity}) - {item.price * (item.quantity || 1)} KGS
      <button onClick={onDelete}>✖️</button>
    </div>
  );
};

export default OrderItem;
