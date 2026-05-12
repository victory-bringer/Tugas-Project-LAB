import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../services/product";
import Layout from "../components/Layout";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleAddToCart = () => {
    alert("Product added to cart.");
  };

  useEffect(() => {
    getProductById(id)
      .then(setProduct)
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <Layout>
        <section className="page-section loading-state">
          <h2>Loading...</h2>
        </section>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout>
        <section className="page-section error-state">
          <h2>Produk tidak ditemukan</h2>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Wrapped in page-section to apply your starry dark background */}
      <section className="page-section">
        <div className="product-content">
          <div className="product-detail">
            <img src={product.img} alt={product.name} />

            <div className="product-detail-info">
              <h1>{product.name}</h1>
              <p className="product-detail-price">
                Rp {product.price.toLocaleString("id-ID")}
              </p>
              <p className="product-detail-desc">{product.description}</p>

              <div className="product-actions">
                <button onClick={handleAddToCart} className="btn btn-primary">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
