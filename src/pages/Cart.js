import React from 'react';

function Cart({ cart, removeFromCart, setShowCheckout, submitOrder, showCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section id="cart" className="py-20 px-4 md:px-10 bg-secondary min-h-screen">
      <h2 className="text-2xl md:text-3xl font-bold text-primary text-center mb-8 uppercase">Your Cart</h2>
      <div className="cart-items flex flex-col gap-4 max-w-[600px] mx-auto">
        {cart.map((item, index) => (
          <div
            key={index}
            className="cart-item flex justify-between items-center p-4 bg-white text-black border border-gray-300 rounded-lg shadow-md"
          >
            <span>
              {item.name} ({item.size}) - {item.quantity}x KES {item.price.toFixed(2)}
            </span>
            <button
              className="bg-red-500 text-white px-3 py-2 rounded-md hover:bg-red-600"
              onClick={() => removeFromCart(index)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary text-center mt-4">
        <span className="total-amount block text-xl font-bold text-black">
          Total: KES {total.toFixed(2)}
        </span>
        <button
          className="bg-primary text-white px-6 py-3 rounded-md mt-4 hover:bg-[#d4a017] transition-all w-full max-w-[600px]"
          onClick={() => {
            if (cart.length === 0) {
              alert('Your cart is empty!');
              return;
            }
            setShowCheckout(true);
            document.getElementById('checkout-form').scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Proceed to Checkout
        </button>
      </div>
      {showCheckout && (
        <form
          id="checkout-form"
          className="mt-6 p-4 bg-white text-black border border-gray-300 rounded-lg max-w-[600px] mx-auto"
          onSubmit={submitOrder}
        >
          <h2 className="text-xl font-bold mb-4 text-center">Checkout</h2>
          <label htmlFor="name" className="block mb-1 font-medium">Name</label>
          <input id="name" name="name" type="text" className="w-full p-2 border border-gray-300 rounded-md mb-4" />
          <label htmlFor="email" className="block mb-1 font-medium">Email</label>
          <input id="email" name="email" type="email" className="w-full p-2 border border-gray-300 rounded-md mb-4" />
          <label htmlFor="phone" className="block mb-1 font-medium">Phone</label>
          <input id="phone" name="phone" type="tel" className="w-full p-2 border border-gray-300 rounded-md mb-4" />
          <label htmlFor="address" className="block mb-1 font-medium">Address</label>
          <textarea id="address" name="address" className="w-full p-2 border border-gray-300 rounded-md mb-4"></textarea>
          <button
            type="submit"
            className="bg-primary text-white px-6 py-3 rounded-md w-full hover:bg-[#d4a017] transition-all"
          >
            Place Order via WhatsApp
          </button>
        </form>
      )}
    </section>
  );
}

export default Cart;