import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.jsx';
import ShopPage from './Pages/Shop/shop'
import Header from './Components/header/header.jsx'
import UserLoginPage from './Pages/UserLogin/user-login';
import { auth } from './Firebase/firebase.utils';

class App extends React.Component {
  
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user})
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact='true' path='/shop' component={ShopPage} />
          <Route exact='true' path='/login' component={UserLoginPage} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
