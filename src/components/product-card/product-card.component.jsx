import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import { ProductCardContainer, Footer, Name, Price } from './product-card.styles';

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext);

    const handleOnClick = () => {
        addItemToCart(product);
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
