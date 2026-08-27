import "./Menu.css";

const menuLists = [
  {
    title: "Bread Basked",
    sub_title: "Assortment of fresh baked fruit breads and muffins 5.50",
  },
  {
    title: "Honey Almond Granola with Fruits",
    sub_title:
      "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00",
  },
  {
    title: "Belgian Waffle",
    sub_title: "Vanilla flavored batter with malted flour 7.50",
  },
  {
    title: "Scrambled eggs",
    sub_title:
      "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50",
  },
  {
    title: "Blueberry Pancakes",
    sub_title: "With syrup, butter and lots of berries 8.50",
  },
];

const Menu = () => {
  return (
    <div className="container">
      <div className="menu-container" id="menu">
        <div className="menu-list">
          <h1 className="menu-head">Our Menu</h1>
          <br />

          <div className="items">
            {menuLists.map((item) => (
              <div className="item">
                <h4 className="menu-title">{item.title}</h4>
                <p className="menu-subtitle">{item.sub_title}</p>
              </div>
            ))}
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
