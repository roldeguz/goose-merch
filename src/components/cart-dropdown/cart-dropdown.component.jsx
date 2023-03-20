import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import { CartDropdownContainer, CartItems, EmptyMessage } from './cart-dropdown.styles';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/checkout');
    }
    
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? cartItems.map((item) => <CartItem key={item.id} cartItem={item} />) : <EmptyMessage>Your cart is empty</EmptyMessage>
                }
            </CartItems>
            <Button onClick={onClickHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;