import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, totalCartItemsCount } = useContext(CartContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
    
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{totalCartItemsCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;