import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
  const [products] = useState([
    { id: 1, name: 'Apple', price: 1.00 },
    { id: 2, name: 'Banana', price: 0.50 },
    { id: 3, name: 'Orange', price: 0.75 }
  ]);

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  return (
    <div>
      <ProductList products={products} addToCart={addToCart} />
      <Cart cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
