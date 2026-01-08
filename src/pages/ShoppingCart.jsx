// src/pages/ShoppingCart.jsx
import React from 'react';
import { useCart } from '../context/CartContext';
import Button from '../components/Button';
import { Link } from 'react-router-dom';

const ShoppingCart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();

  // Calculamos el total, asegurando que todos los precios existan
  const total = cart.reduce(
    (sum, item) => sum + (item.price ? item.price * item.quantity : 0),
    0
  );

  return (
    <div className="shopping-cart">
      <h2>Tu Carrito</h2>

      {cart.length === 0 ? (
        <p>Tu carrito está vacío. <Link to="/catalogo">Ir al catálogo</Link></p>
      ) : (
        <div>
          <ul className="cart-list">
            {cart.map((item) => (
              <li key={item.id} className="cart-item">
                <div>
                  <strong>{item.name}</strong> — ${item.price?.toFixed(2) ?? '0.00'}
                </div>
                <div>
                  <Button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</Button>
                  <span style={{ margin: '0 10px' }}>{item.quantity}</span>
                  <Button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</Button>
                  <Button onClick={() => removeFromCart(item.id)} variant="secondary">Eliminar</Button>
                </div>
              </li>
            ))}
          </ul>

          <h3>Total: ${total.toFixed(2)}</h3>
          <Button onClick={clearCart} variant="secondary">Vaciar Carrito</Button>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
