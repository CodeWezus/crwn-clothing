import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.jsx';
import ShopPage from './Pages/Shop/shop'
import Header from './Components/header/header.jsx'

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact='true' path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
