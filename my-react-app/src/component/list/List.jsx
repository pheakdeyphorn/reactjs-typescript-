import { useState } from "react";

export default function List() {
  const [food, setFood] = useState(["Apple", "Banana", "Orange"]);

  function handleAdd() {
    const newFood = document.getElementById("inputFood").value;
    setFood([...food, newFood]);

    document.getElementById("inputFood").value = "";
  }

  function handleRemove(i) {
    setFood(food.filter((item, index) => index != i));
  }

  return (
    <div className="container">
      <h1>List of foods</h1>
      <ul>
        {food.map((item, index) => (
          <li key={index} onClick={() => handleRemove(index)}>
            {item}
          </li>
        ))}
      </ul>
      <input type="text" id="inputFood" />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}
