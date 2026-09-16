import React from "react";
import { MobileOutlined, SearchOutlined } from "@ant-design/icons";
import "./styles.css";

export default function MainHeader() {
  return (
    <>
      <div className="main-header">
        <div className="logo">
          <MobileOutlined
            style={{ fontSize: 36, marginRight: 8, color: "#666" }}
          />
          <div>
            <h1 className="logo-text">MOBILE</h1>
            <p className="logo-subtext">THE BIGGEST CHOICE ON THE WEB</p>
          </div>
        </div>
        <div className="header-right">
          <div className="user-links">
            Welcome ( <a href="#login">Log in</a> ) |{" "}
            <a href="#account">Your Account</a>
          </div>
          <div className="search-box">
            <input type="text" className="search-input" placeholder="" />
            <button className="search-btn">
              <SearchOutlined style={{ color: "#888" }} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
