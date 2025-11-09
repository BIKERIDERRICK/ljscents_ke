// src/pages/Cart.js
export default function Cart({ cart, removeFromCart, setShowCheckout, submitOrder, showCheckout }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section id="cart" className="min-h-screen py-20 px-4 bg-[#1b1b1b] text-white">
      <div className="max-w-4xl mx-auto">
        <h5 className="uppercase font-bold text-[#B8860B] tracking-wider text-sm mb-2 text-center">Your Cart</h5>
        <h2 className="text-4xl font-bold text-center mb-12">Review Your Order</h2>

        {cart.length === 0 ? (
          <p className="text-center text-xl">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              {cart.map((item, i) => (
                <div key={i} className="bg-[#2a2a2a] p-4 rounded-lg flex justify-between items-center">
                  <div>
                    <p className="font-bold">{item.name} ({item.size})</p>
                    <p className="text-sm text-[#d1d1f1]">KES {item.price} × {item.quantity}</p>
                  </div>
                  <button onClick={() => removeFromCart(i)} className="text-red-500 hover:text-red-400">Remove</button>
                </div>
              ))}
            </div>

            <div className="bg-[#2a2a2a] p-6 rounded-lg text-center">
              <p className="text-2xl font-bold mb-4">Total: KES {total.toFixed(2)}</p>
              <button onClick={() => setShowCheckout(true)} className="bg-[#28a745] text-white px-8 py-3 rounded-full font-bold hover:bg-[#218838] transition">
                Proceed to Checkout
              </button>
            </div>

            {showCheckout && (
              <form onSubmit={submitOrder} className="mt-8 bg-[#2a2a2a] p-6 rounded-lg space-y-4">
                <input id="checkout-name" placeholder="Name" required className="w-full p-3 rounded text-black" />
                <input id="checkout-email" type="email" placeholder="Email" required className="w-full p-3 rounded text-black" />
                <input id="checkout-phone" placeholder="Phone" required className="w-full p-3 rounded text-black" />
                <textarea id="checkout-address" placeholder="Address" rows="3" required className="w-full p-3 rounded text-black"></textarea>
                <button type="submit" className="w-full bg-[#28a745] text-white py-3 rounded font-bold hover:bg-[#218838]">
                  Place Order via WhatsApp
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </section>
  );
}