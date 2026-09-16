import React from "react";
import "./styles.css";

export default function Copyright({ year, owner }) {
  return (
    <>
      <div className="copyright">
        © {year} Powered by {owner}™. All rights reserved
      </div>
    </>
  );
}
