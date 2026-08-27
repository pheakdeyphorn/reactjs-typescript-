import "./Home.css";

const Home = () => {
  return (
    <div className="container">
      <div className="home-container" id="home">
        <div className="home-image">
          <img
            src="https://www.w3schools.com/w3images/tablesetting2.jpg"
            alt="Table Setting"
          />
        </div>
        <div className="home-text">
          <h1>About Catering</h1>
          <br />
          <h5>Tradition since 1889</h5>
          <p>
            The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor
            sit amet, consectetur adipiscing elit consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute iruredolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.We only use <span>seasonal</span> ingredients.
          </p>
          <p className="text-gray">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum consectetur adipiscing
            elit, sed do eiusmod temporincididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Home;
