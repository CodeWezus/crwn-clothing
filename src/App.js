import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.jsx';
import ShopPage from './Pages/Shop/shop'
import Header from './Components/header/header.jsx'
import UserLoginPage from './Pages/UserLogin/user-login';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact='true' path='/shop' component={ShopPage} />
        <Route exact='true' path='/login' component={UserLoginPage} />
      </Switch>
    </div>
  );
}

export default App;
