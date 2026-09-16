import React from "react";
import {
  FacebookFilled,
  TwitterOutlined,
  WifiOutlined,
} from "@ant-design/icons";
import "./styles.css";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-col">
          <h4>Information</h4>
          <a href="#sitemap">Sitemap</a>
          <a href="#legal">Legal Notice</a>
          <a href="#terms">Terms and conditions</a>
          <a href="#about">About us</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-col">
          <h4>Our Offers</h4>
          <a href="#new">New products</a>
          <a href="#specials">Specials</a>
          <a href="#sellers">Top sellers</a>
          <a href="#manufacturers">Manufacturers</a>
          <a href="#suppliers">Suppliers</a>
        </div>
        <div className="footer-col">
          <h4>My Account</h4>
          <a href="#orders">My orders</a>
          <a href="#addresses">My addresses</a>
          <a href="#info">My personal info</a>
          <a href="#slips">My credit slips</a>
          <a href="#vouchers">My vouchers</a>
        </div>
        <div className="footer-col">
          <h4>Follow Us</h4>
          <div className="social-link">
            <FacebookFilled
              style={{ fontSize: 18, color: "#888", marginRight: 8 }}
            />
            <span>Facebook</span>
          </div>
          <div className="social-link">
            <TwitterOutlined
              style={{ fontSize: 18, color: "#888", marginRight: 8 }}
            />
            <span>Twitter</span>
          </div>
          <div className="social-link">
            <WifiOutlined
              style={{ fontSize: 18, color: "#888", marginRight: 8 }}
            />
            <span>RSS</span>
          </div>
        </div>
        <div className="footer-col">
          <h4>Contact Us</h4>
          <p>9870St Vincent Place, Glasgow, DC 45 Fr 45.</p>
          <p>Tel: +1 800 603 6035</p>
          <p>mail@demolink.org</p>
        </div>
      </footer>
    </>
  );
}
