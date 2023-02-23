import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import CartItem from '../cart-item/cart-item.component';
import Button from '../button/button.component';

import { CartDropdownContainer, CartItems } from './cart-dropdown.styles';

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate();

    const onClickHandler = () => {
        navigate('/checkout');
    }
    
    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
                }
            </CartItems>
            <Button onClick={onClickHandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropdown;