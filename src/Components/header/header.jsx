import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase.utils'
import { connect } from 'react-redux';

import './header.scss'

const Header = ({ currentUser }) => (
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
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

// Here we create a higher order component which allows us to attach our userReducer to the Header so the header can access the currentUser property.
export default connect(mapStateToProps)(Header);