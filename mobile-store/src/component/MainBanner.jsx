import React from "react";
import "./styles.css";
import { CaretRightOutlined } from "@ant-design/icons";

export default function MainBanner() {
  return (
    <>
      <section className="hero-section">
        {/* Left Featured Banner (iPhone 5) */}
        <div className="main-hero">
          <div className="hero-content">
            <h2 className="hero-title">iPhone 5</h2>
            <h4 className="hero-subtitle">DOLORE LOREM IPSUM</h4>
            <p className="hero-desc">
              DOVITAE DIAM PURUS LUCTUS FACILISIS. NULLAM AT EROS TRISTIQUE
              ULTRICE. DUIS QUIS IMPERDIE EST SED LOBORTIS ULTRICES ALIQUET.
            </p>
            <div className="hero-price">From $899.99</div>
            <button className="black-btn">SHOP NOW</button>
          </div>
          <div className="hero-image-placeholder">
            <img
              src="https://via.placeholder.com/260x320?text=iPhone+5"
              alt="iPhone 5"
              style={{ maxHeight: "100%", maxWidth: "100%" }}
            />
          </div>
          <div className="carousel-dots">
            <span className="dot" style={{ backgroundColor: "#333" }}></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </div>
        </div>

        {/* Right Promo Banners */}
        <div className="side-banners">
          <div className="sale-banner">
            <h2 className="sale-title">SALE</h2>
            <div className="sale-sub">EXTRA LINES JUST ADDED UP TO</div>
            <h1 className="sale-discount">20% OFF</h1>
            <div className="sale-note">
              PLUS FREE DELIVERY ON ORDERS OVER $900
            </div>
            <button className="black-btn" style={{ marginTop: 15 }}>
              SHOP NOW! <CaretRightOutlined />
            </button>
          </div>
          <div className="shipping-banner">
            <h2 style={{ fontSize: 32, margin: 0, fontWeight: "bold" }}>
              FREE SHIPPING
            </h2>
            <p style={{ margin: 0, fontSize: 13 }}>ON ORDERS OVER $ 900</p>
          </div>
        </div>
      </section>
    </>
  );
}
