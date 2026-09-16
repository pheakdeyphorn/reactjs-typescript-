import "./styles.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav-bar">
      {[
        { name: "HOME", path: "/" },
        { name: "ABOUT", path: "/about" },
        { name: "CONTACT", path: "/contact" },
      ].map((item) => (
        <Link key={item.path} to={item.path} className="nav-item">
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
