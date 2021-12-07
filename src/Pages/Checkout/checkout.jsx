import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart-selectors';

import CheckoutItem from '../../Components/checkout-item/checkout-item';

import './checkout.scss'

const headerTitles = ['Product', 'Description', 'Quantity', 'Price', 'Remove']

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            {
                headerTitles.map(headerTitle =>
                    <div key={headerTitle} className='header-block'>
                        <span>{headerTitle}</span>
                    </div>    
                )
            }
        </div>
        {
            cartItems.map(cartItem => (
             <CheckoutItem key={cartItem.id} cartItem={cartItem} />      
            ))
        }
        <div className='total'>
            <span className='total-text'>Total: ${total}</span>
        </div>
    </div>
)

export const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);