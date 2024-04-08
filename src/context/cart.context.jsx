import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, item, cartQuantity) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === item.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + cartQuantity }
        : cartItem
    );
  }

  return [...cartItems, { ...item, quantity: cartQuantity }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartItemsCount: 0,
  cartItemsTotal: 0,
  cartQuantity: 1,
  addQuantityToCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartItemsTotal, setCartItemsTotal] = useState(0);
  const [cartQuantity, setCartQuantity] = useState(1);

  useEffect(() => {
    const cartItemsCount = cartItems.reduce(
      (count, item) => count + item.quantity,
      0
    );
    setCartItemsCount(cartItemsCount);
  }, [cartItems]);

  useEffect(() => {
    const cartItemsTotal = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    setCartItemsTotal(cartItemsTotal);
  }, [cartItems]);

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item, cartQuantity));
  };

  const decreaseCartItemQuantity = (item) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item);
    if (existingCartItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };
  const increaseCartItemQuantity = (item) => {
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === item);
    if (existingCartItem) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    }
  };

  const addQuantityToCart = (item) => {
    setCartQuantity(item);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemsCount,
    cartItemsTotal,
    cartQuantity,
    addQuantityToCart,
    clearCart,
    decreaseCartItemQuantity,
    increaseCartItemQuantity,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
