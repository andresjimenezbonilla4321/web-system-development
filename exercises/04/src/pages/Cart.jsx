import { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart } =
    useContext(CartContext);
  const [customerName, setCustomerName] = useState('');
  const [confirmation, setConfirmation] = useState('');

  const total = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handleNameChange = (event) => {
    setCustomerName(event.target.value);
  };

  const handleCheckout = (event) => {
    event.preventDefault();
    if (customerName.trim() === '') {
      return;
    }
    setConfirmation(`Thank you for your order, ${customerName.trim()}!`);
    clearCart();
    setCustomerName('');
  };

  return (
    <div>
      <h2>Cart</h2>

      {cartItems.length === 0 ? (
        <p data-testid="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.product.id} data-testid={`cart-item-${item.product.id}`}>
                <span className="cart-name">{item.product.name}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                  data-testid={`decrease-${item.product.id}`}
                >
                  -
                </button>
                <span data-testid={`quantity-${item.product.id}`}>{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                  data-testid={`increase-${item.product.id}`}
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item.product.id)}
                  data-testid={`remove-${item.product.id}`}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p>
            Total: <strong data-testid="cart-total">${total.toFixed(2)}</strong>
          </p>

          <form onSubmit={handleCheckout}>
            <input
              type="text"
              placeholder="Your name"
              value={customerName}
              onChange={handleNameChange}
              data-testid="customer-name"
            />
            <button type="submit" data-testid="checkout">
              Checkout
            </button>
          </form>
        </>
      )}

      {confirmation && <p data-testid="order-confirmation">{confirmation}</p>}
    </div>
  );
};

export default Cart;
