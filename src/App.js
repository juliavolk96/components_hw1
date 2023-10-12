import React from 'react';
import ShopItemFunc from './components/ShopItemFunc';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemFunc/>
      </div>
    </div>
  );
}

export default App;
