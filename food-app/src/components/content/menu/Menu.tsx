import "./Menu.css";

const Menu = () => {
  return (
    <div className="container">
      <div className="menu-container" id="menu">
        <div className="menu-list">
          <h1 className="menu-head">Our Menu</h1>
          <br />

          <div className="items">
            <div className="item">
              <h4 className="menu-title">Bread Basked</h4>
              <p className="menu-subtitle">
                Assortment of fresh baked fruit breads and muffins 5.50
              </p>
            </div>

            <div className="item">
              <h4 className="menu-title">Honey Almond Granola with Fruits</h4>
              <p className="menu-subtitle">
                Natural cereal of honey toasted oats, raisins, almonds and dates
                7.00
              </p>
            </div>

            <div className="item">
              <h4 className="menu-title">Belgian Waffle</h4>
              <p className="menu-subtitle">
                Vanilla flavored batter with malted flour 7.50
              </p>
            </div>

            <div className="item">
              <h4 className="menu-title">Scrambled eggs</h4>
              <p className="menu-subtitle">
                Scrambled eggs, roasted red pepper and garlic, with green onions
                7.50
              </p>
            </div>

            <div className="item">
              <h4 className="menu-title">Blueberry Pancakes</h4>
              <p className="menu-subtitle">
                With syrup, butter and lots of berries 8.50
              </p>
            </div>
          </div>
        </div>

        <div className="menu-image">
          <img
            src="https://www.w3schools.com/w3images/tablesetting.jpg"
            alt="Menu"
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Menu;
