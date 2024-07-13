import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../redux/actions/cartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty <Link to="/">Go Back</Link>
        </p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.product}>
              <img src={item.image} alt={item.name} />
              <Link to={`/product/${item.product}`}>{item.name}</Link>
              <p>${item.price}</p>
              <button onClick={() => removeFromCartHandler(item.product)}>
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
