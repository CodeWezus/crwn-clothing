import React from "react";
import './collection-item.scss';
import CustomButton from "../custom-button/custom-button";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";

const CollectionItem = ({item, addItem}) => {

    const { name, imageUrl, price } = item;

    return(
        <div className='collection-item'>
            <div 
            className='image' 
            style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <CustomButton inverted onClick={() => addItem(item)}>Add to cart</CustomButton>
        </div>
    )
};

// When this function is called (dispatched) it will receive the item as the property, 
// pass it into the addItem action creator which gives us back an object where the type = addItem and the payload is = to the item passed. Then dispatch that object into the store.
const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CollectionItem);