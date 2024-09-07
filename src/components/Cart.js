import React from 'react';

const Cart = ({ cartItems, removeFromCart }) => {
  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.product.name} - Quantity: {item.quantity} - ${item.product.price * item.quantity.toFixed(2)}
            <button onClick={() => removeFromCart(item.product.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotal().toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
