import React from 'react';
import OrderItem from './OrderItem';
import {Item} from '../types';

interface Props {
  order: Item[];
  DeleteItem: (itemName: string) => void;
}

const OrderDetails: React.FC<Props> = ({order, DeleteItem}) => {
  if (order.length === 0) {
    return <div className="OrderDetails">Order is empty! Please add some items!</div>;
  }

  return (
    <div className="OrderDetails">
      {order.map((item, index) => (
        <OrderItem key={index} item={item} onDelete={() => DeleteItem(item.name)}/>
      ))}
    </div>
  );
};

export default OrderDetails;
