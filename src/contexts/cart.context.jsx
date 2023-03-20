import { createContext, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

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

const getCartItemsCount = (cartItems) => cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

const getCartItemsTotal  = (cartItems) => cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);

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

export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}

export const cartReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Unhandled type ${type} in cartReducer.`);
    }
}

const INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
    totalCartItemsCount: 0,
    totalCartItemsPrice: 0
}

export const CartProvider = ({children}) => {
    //const [isCartOpen, setIsCartOpen] = useState(false);
    //const [cartItems, setCartItems] = useState([]);
    //const [totalCartItemsCount, setTotalCartItemsCount] = useState(0);
    //const [totalCartItemsPrice, setTotalCartItemsPrice] = useState(0);

    const [{isCartOpen, cartItems, totalCartItemsCount, totalCartItemsPrice}, dispatch] = useReducer(cartReducer, INITIAL_STATE);

    /*
    useEffect(() => {
        const cartItemsCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setTotalCartItemsCount(cartItemsCount);
    }, [cartItems]);

    useEffect(() => {
        const totalCartItemsPrice = cartItems.reduce((total, cartItem) => total + (cartItem.quantity * cartItem.price), 0);
        setTotalCartItemsPrice(totalCartItemsPrice);
    }, [cartItems]);
    */

    const updateCartItems = (newCartItems) => {
        const newTotalCartItemsCount = getCartItemsCount(newCartItems);
        const newTotalCartItemsPrice = getCartItemsTotal(newCartItems);
        
        dispatch(createAction(CART_ACTION_TYPES.SET_CART_ITEMS, {
            cartItems: newCartItems,
            totalCartItemsCount: newTotalCartItemsCount,
            totalCartItemsPrice: newTotalCartItemsPrice
        }));
    }

    const addItemToCart = (product) => {
        const newCartItems = addCartItem(cartItems, product);
        updateCartItems(newCartItems);
        //setCartItems(addCartItem(cartItems, product));
    }

    const removeItemFromCart = (product) => {
        const newCartItems = removeCartItem(cartItems, product);
        updateCartItems(newCartItems);
        //setCartItems(removeCartItem(cartItems, product));  
    }

    const clearItemFromCart = (product) => {
        const newCartItems = clearCartItem(cartItems, product);
        updateCartItems(newCartItems);
        //setCartItems(clearCartItem(cartItems, product));
    }

    const setIsCartOpen = (bool) => {
        dispatch(createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, bool));
    }

    const value = {isCartOpen, setIsCartOpen, cartItems, addItemToCart, totalCartItemsCount, removeItemFromCart, clearItemFromCart, totalCartItemsPrice};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}