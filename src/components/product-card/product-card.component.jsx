import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, Footer, Name, Price } from './product-card.styles';

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const handleOnClick = () => {
        dispatch(addItemToCart(cartItems, product));
    }

    return (
        <ProductCardContainer>
            <img src={product.imageUrl} alt={`${product.name}`} />
            <Footer>
                <Name>{product.name}</Name>
                <Price>${product.price}</Price>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={handleOnClick}>Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;
