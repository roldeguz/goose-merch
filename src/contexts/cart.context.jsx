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

const removeCartItem = (cartItems, product) => {
    const cartItemExists = cartItems.find(cartItem => cartItem.id === product.id);

    if (cartItemExists.quantity === 1) {
        return cartItems.filter((cartItem) => cartItem.id !== product.id);
    } 

    return cartItems.map((cartItem) => cartItem.id === product.id 
        ? {...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    );
}

const clearCartItem = (cartItems, product) => cartItems.filter((cartItem) => cartItem.id !== product.id);

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemToCart: () => {}, 
    totalCartItemsCount: 0,
    removeItemFromCart: () => {},
    clearItemFromCart: () => {},
    totalCartItemsPrice: 0
});

export const CartProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalCartItemsCount, setTotalCartItemsCount] = useState(0);
    const [totalCartItemsPrice, setTotalCartItemsPrice] = useState(0);

    useEffect(() => {
        const cartItemsCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setTotalCartItemsCount(cartItemsCount);
    }, [cartItems]);

    useEffect(() => {
        const totalCartItemsPrice = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        setTotalCartItemsPrice(totalCartItemsPrice);
    }, [cartItems]);

    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product));
    }

    const removeItemFromCart = (product) => {
        setCartItems(removeCartItem(cartItems, product));
    }

    const clearItemFromCart = (product) => {
        setCartItems(clearCartItem(cartItems, product));
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, totalCartItemsCount, removeItemFromCart, clearItemFromCart, totalCartItemsPrice};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}