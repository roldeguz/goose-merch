import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import './checkout-item.styles.scss';

const CheckoutItem = ({cartItem}) => {
    const { removeItemFromCart, addItemToCart, clearItemFromCart } = useContext(CartContext);
    const { name, imageUrl, quantity, price } = cartItem;

    const removeItemHandler = () => removeItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </div>
            <span className='price'>${price}</span>
            <div className='remove-button'><span onClick={clearItemHandler}>&#10005;</span></div>
        </div>
    )
}

export default CheckoutItem;