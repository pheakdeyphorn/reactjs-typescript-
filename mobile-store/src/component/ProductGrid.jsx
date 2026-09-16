import React from "react";
import "./styles.css";

export default function ProductGrid() {
  return (
    <>
      <section className="top-products-grid">
        {[
          {
            name: "NOKIA E7-00",
            img: "https://via.placeholder.com/100x160?text=E7-00",
          },
          {
            name: "NOKIA E73",
            img: "https://via.placeholder.com/100x160?text=E73",
          },
          {
            name: "HTC DESIRE S",
            img: "https://via.placeholder.com/100x160?text=Desire+S",
          },
        ].map((prod, index) => (
          <div key={index} className="top-product-card">
            <img src={prod.img} alt={prod.name} className="top-prod-img" />
            <div className="top-prod-details">
              <h3 className="top-prod-title">{prod.name}</h3>
              <p className="top-prod-desc">Vitae diam doloret puru luctus.</p>
              <button className="black-btn-small">SHOP NOW</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
