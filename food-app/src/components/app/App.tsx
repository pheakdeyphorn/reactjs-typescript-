import "./App.css";
import Nav from "../nav/Nav";
import Intro from "../intro/Intro";
import Content from "../content/Content";

function App() {
  return (
    <>
      <Nav></Nav>

      <Intro></Intro>

      <div className="contents">
        <Content></Content>
      </div>
    </>
  );
}

export default App;
