import React from "react";
import "./styles.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
export default function Header() {
  return (
    <>
      <header className="top-bar">
        <div className="top-nav-left">
          <a href="#home">Home</a>
          <a href="#specials">Specials</a>
          <a href="#delivery">Delivery</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="top-nav-right">
          <span>
            Currency: <strong>Dollar</strong>
          </span>
          <span style={{ marginLeft: 15 }}>En Es Fr</span>
          <div className="cart-btn">
            <ShoppingCartOutlined style={{ fontSize: 18, marginRight: 5 }} />
            <span>CART: (EMPTY)</span>
          </div>
        </div>
      </header>
    </>
  );
}
