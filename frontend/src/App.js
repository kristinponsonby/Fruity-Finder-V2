import './assets/App.css';
import React from 'react';
import FruitIndex from './Components/FruitIndex';



const App = () => {
  return <div className="header">
    <div className="header-text"><h1>Welcome to Fruity Finder</h1></div>
 
       <FruitIndex />

    </div>
       
}

export default App;
