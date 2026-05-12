import React from "react";
import "../assets/productCard.css";

export default function ProductCard({ img, name, price, onClick }) {
  return (
    <article
      className="product-card"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <img src={img} alt={name} className="product-image" />
      <div className="product-info">
        <h3 className="product-title">{name}</h3>
        <p className="product-price">Rp {price.toLocaleString("id-ID")}</p>
        <button className="btn">Lihat Detail</button>
      </div>
    </article>
  );
}
