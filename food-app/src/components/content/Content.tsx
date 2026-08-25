import Home from "./home/Home";
import Menu from "./menu/Menu";
import Contact from "./contact/Contact";
import "./Content.css";

const Content = () => {
  return (
    <div className="content-container">
      <Home></Home>
      <Menu></Menu>
      <Contact></Contact>
    </div>
  );
};

export default Content;
