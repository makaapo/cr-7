import './App.css';
import {Item} from './types';
import MenuItem from './components/MenuItem';

const MENU: Item[] = [
  { name: 'Hamburger 🍔', price: 80, quantity: 1 },
  { name: 'Cheeseburger 🍔 + 🧀', price: 90, quantity: 1 },
  { name: 'Fries 🍟', price: 45, quantity: 1 },
  { name: 'Coffee ☕️', price: 70, quantity: 1 },
  { name: 'Tea 🍵', price: 50, quantity: 1 },
  { name: 'Cola 🥤', price: 40, quantity: 1 },
];

const App = () => {
  return (
    <div className="App">
      {MENU.map((item) => (
        <MenuItem name={item.name} price={item.price} quantity={item.quantity} />
      ))}
    </div>
  );
};

export default App;
