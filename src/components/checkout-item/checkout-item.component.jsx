import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Value, Arrow, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const { removeItemFromCart, addItemToCart, clearItemFromCart } = useContext(CartContext);
    const { name, imageUrl, quantity, price } = cartItem;

    const removeItemHandler = () => removeItemFromCart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <BaseSpan>{name}</BaseSpan>
            <Quantity>
                <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={addItemHandler}>&#10095;</Arrow>
            </Quantity>
            <BaseSpan>${price}</BaseSpan>
            <RemoveButton><span onClick={clearItemHandler}>&#10005;</span></RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;