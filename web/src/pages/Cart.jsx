import React, { useState } from "react";
import "../assets/cart.css";
import Layout from "../components/Layout";

export default function Cart() {
  const [carts, setCarts] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <Layout>
      <section className="cart-page">
        <h2>🛒 Cart</h2>

        {carts.length === 0 ? (
          <p className="empty-cart">Belum ada item yang masuk Cart.</p>
        ) : (
          <>
            <div className="cart-list">
              {carts.map((item) => (
                <div key={item._id} className="cart-item">
                  <img src={item.image} alt={item.name} />

                  <div className="cart-info">
                    <h3>{item.name}</h3>
                    <p>Rp {item.price.toLocaleString("id-ID")}</p>
                  </div>

                  <button
                    className="remove-btn"
                    onClick={() => removeFromCart(item.cartId)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h3>Total: Rp {totalPrice.toLocaleString("id-ID")}</h3>

              <div className="cart-actions">
                <button className="clear-btn" onClick={clearCart}>
                  Clear Cart
                </button>

                <button className="checkout-btn">Checkout</button>
              </div>
            </div>
          </>
        )}
      </section>
    </Layout>
  );
}
