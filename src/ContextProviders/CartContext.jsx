// contexts/CartContext.jsx
import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (product) => {
    // Check if item already exists
    const existingItem = items.find(item => item.id === product.id);
    
    if (existingItem) {
      // If item exists, show a message
      alert('Item already in cart!');
      return;
    }

    // Add new item to cart
    const cartItem = {
      id: product.id,
      title: product.name, // Using 'name' from product object
      price: product.price,
      image: product.image
    };

    setItems([...items, cartItem]);
  };

  const removeFromCart = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalPrice = () => {
    return items.reduce((sum, item) => sum + item.price, 0);
  };

  const getItemCount = () => {
    return items.length;
  };

  return (
    <CartContext.Provider 
      value={{ 
        items, 
        addToCart, 
        removeFromCart, 
        clearCart,
        getTotalPrice,
        getItemCount
      }}
    >
      {children}
    </CartContext.Provider>
  );
};