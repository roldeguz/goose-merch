import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.component';
import './product-card.styles.scss';

const ProductCard = ({product}) => {
    const {addItemToCart} = useContext(CartContext);

    const handleOnClick = () => {
        addItemToCart(product);
    }

    return (
        <div className='product-card-container'>
            <img src={product.imageUrl} alt={`${product.name}`} />
            <div className='footer'>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}</span>
            </div>
            <Button buttonType='inverted' onClick={handleOnClick}>Add to cart</Button>
        </div>
    )
}

export default ProductCard;
