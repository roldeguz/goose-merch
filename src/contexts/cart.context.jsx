import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, product) => {
    const cartItemExists = cartItems.find(cartItem => cartItem.id === product.id);
    if (cartItemExists) {
        return cartItems.map((cartItem) => cartItem.id === product.id 
            ? {...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    } 

    return [...cartItems, {...product, quantity: 1}];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}, 
    totalCartItemsCount: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItemsCount, setTotalCartItemsCount] = useState(0);

    useEffect(() => {
        const cartItemsCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setTotalCartItemsCount(cartItemsCount);
    }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, totalCartItemsCount};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}