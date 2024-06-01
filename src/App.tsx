import './App.css';
import React, {useState} from 'react';
import OrderDetails from './components/OrderDetails';
import AddItems from './components/AddItems';
import {Item} from './types';
import HamburgerImage from './assets/hamburger.png';
import CheeseburgerImage from './assets/cheeseburger.png';
import colaImage from './assets/cola.png';
import CoffeeImage from './assets/coffee.png';
import TeaImage from './assets/tea.png';
import FriesImage from './assets/fries.png';

const MENU: Item[] = [
  {name: 'Hamburger', price: 80, quantity: 1, image: HamburgerImage},
  {name: 'Cheeseburger', price: 90, quantity: 1, image: CheeseburgerImage},
  {name: 'Fries', price: 45, quantity: 1, image: FriesImage},
  {name: 'Coffee', price: 70, quantity: 1, image: CoffeeImage},
  {name: 'Tea', price: 50, quantity: 1, image: TeaImage},
  {name: 'Cola', price: 40, quantity: 1, image: colaImage},
];

const App: React.FC = () => {
  const [order, setOrder] = useState<Item[]>([]);

  const addItem = (itemName: string) => {
    const item = MENU.find(item => item.name === itemName);
    if (item) {
      const existItem = order.find(orderItem => orderItem.name === itemName);
      if (existItem) {
        setOrder(prevOrder =>
          prevOrder.map(orderItem =>
            orderItem.name === itemName
              ? {...orderItem, quantity: (orderItem.quantity || 1) + 1}
              : orderItem
          )
        );
      } else {
        setOrder(prevOrder => [...prevOrder, {...item, quantity: 1}]);
      }
    }
  };

  const DeleteItem = (itemName: string) => {
    setOrder(prevOrder =>
      prevOrder.reduce<Item[]>((newOrder, item) => {
        if (item.name === itemName && item.quantity && item.quantity > 1) {
          return [...newOrder, {...item, quantity: item.quantity - 1}];
        } else if (item.name !== itemName) {
          return [...newOrder, item];
        }
        return newOrder;
      }, [])
    );
  };

  const GetTotal = () => {
    return order.reduce((total, item) => total + item.price * (item.quantity || 1), 0);
  };

  return (
    <div className="App">
      <div className="AllMenu">
        <OrderDetails order={order} DeleteItem={DeleteItem}/>
        <AddItems items={MENU} addItem={addItem}/>
      </div>
      <div className="TotalPrice">Total price: {GetTotal()} KGS</div>
    </div>
  );
};

export default App;
