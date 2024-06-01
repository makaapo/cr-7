import React from 'react';

interface MenuItemProps {
  name: string;
  price: number;
  quantity: number;
}

const MenuItem: React.FC<MenuItemProps> = ({ name, price, quantity }) => {
  return <div>{name} - {price} KGS x {quantity}</div>;
};

export default MenuItem;

