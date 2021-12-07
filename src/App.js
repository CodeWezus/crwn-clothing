import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/homepage.jsx';
import ShopPage from './Pages/Shop/shop';
import CheckoutPage from './Pages/Checkout/checkout';
import Header from './Components/header/header.jsx';
import UserLoginPage from './Pages/UserLogin/user-login';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selectors';

class App extends React.Component {
  unsubscribeFromAuth = null

  componentDidMount(){

    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          // Here we are using the setCurrentUser function of the user reducer to set the user state.
          setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }
      
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckoutPage} />
          <Route exact path='/login' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<UserLoginPage/>)} />
        </Switch>
      </div>
    );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
