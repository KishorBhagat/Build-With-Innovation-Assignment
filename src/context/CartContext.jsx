import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const CartContextProvider = ({children}) => {

    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const totalPrice = cartItems.reduce((previousValue, currentValue) => {
            return previousValue + currentValue.price;
          }, 0);
        setCartTotal(totalPrice);
    }, [cartItems])
    
    return (
        <CartContext.Provider value={{cartCount, setCartCount, cartItems, setCartItems, cartTotal, setCartTotal}}>
            {children}
        </CartContext.Provider>
    )
}