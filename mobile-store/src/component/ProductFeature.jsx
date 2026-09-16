import React from "react";
import "./styles.css";

export default function ProductFeature() {
  return (
    <>
      <section style={{ marginTop: 20 }}>
        <div className="section-header">FEATURED PRODUCTS</div>
        <div className="featured-grid">
          {[
            {
              name: "Acer Stream",
              price: "$494.10",
              desc: "We are proud to offer you our hi-tech original...",
            },
            {
              name: "Anycool D58",
              price: "$215.00",
              desc: "The products of our store are the real...",
            },
            {
              name: "Anycool I929",
              price: "$39.20",
              desc: "Their testimonials prove that the reputation...",
            },
            {
              name: "Anycool KDI D528",
              price: "$315.00",
              desc: "We observe the policy of providing only branded...",
            },
            {
              name: "Anycool Kdi T818",
              price: "$549.00",
              desc: "This fact confirms that we sell only high...",
            },
          ].map((prod, index) => (
            <div key={index} className="product-card">
              <div className="prod-img-container">
                <img
                  src={`https://via.placeholder.com/110x160?text=Phone+${index + 1}`}
                  alt={prod.name}
                  style={{ maxHeight: "100%" }}
                />
              </div>
              <h4 className="prod-name">{prod.name}</h4>
              <p className="prod-desc">{prod.desc}</p>
              <div className="prod-price">{prod.price}</div>
              <button className="add-to-cart-btn">ADD TO CART</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
