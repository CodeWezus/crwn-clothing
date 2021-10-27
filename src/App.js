import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.jsx';
import ShopPage from './Pages/Shop/shop'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact='true' path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
