import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase.utils'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selectors';
import { selectCurrentUser } from '../../redux/user/user-selectors';
import CartIcon from '../cart-icon/cart-icon';
import CartDropdown from '../cart-dropdown/cart-dropdown';

import './header.scss'

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to="/">
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'>SHOP</Link>
            <Link className='option' to='/shop'>CONTACT</Link>
            {
                currentUser ? (
                <div className='option' onClick={() => auth.signOut()}>LOG OUT</div>
                ) : (
                    <Link className='option' to='/login'>LOG IN</Link>
                )
            }
        <CartIcon />
        </div>
        {
            hidden ? null :
            <CartDropdown />
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

// Here we create a higher order component which allows us to attach our userReducer to the Header so the header can access the currentUser property.
export default connect(mapStateToProps)(Header);