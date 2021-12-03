import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase.utils'
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon';
import './header.scss'
import CartDropdown from '../cart-dropdown/cart-dropdown';

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

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
});

// Here we create a higher order component which allows us to attach our userReducer to the Header so the header can access the currentUser property.
export default connect(mapStateToProps)(Header);