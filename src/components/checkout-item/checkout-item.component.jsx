import { useDispatch, useSelector } from 'react-redux';

import { removeItemFromCart, addItemToCart, clearItemFromCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import { CheckoutItemContainer, ImageContainer, BaseSpan, Quantity, Value, Arrow, RemoveButton } from './checkout-item.styles';

const CheckoutItem = ({cartItem}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, imageUrl, quantity, price } = cartItem;

    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemToCart(cartItems, cartItem));
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));

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