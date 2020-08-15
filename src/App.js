import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Slider from './component/ItemSlider';
import AllItems from './component/AllItems';
import Cart from './component/cart';
import {TransactionProvider} from './service/Context';

function App() {

  return (
    <div>
      <TransactionProvider>
      <Navbar />
      
      <Slider />
      
      <AllItems />
      <Cart />
      </TransactionProvider>
    </div>
  );
}

export default App;
