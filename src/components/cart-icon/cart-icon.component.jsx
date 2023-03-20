import { useSelector, useDispatch } from 'react-redux';
import { selectIsCartOpen, selectCartCount } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';

import { CartIconContainer, ShoppingIcon, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const totalCartItemsCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));
    
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{totalCartItemsCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;