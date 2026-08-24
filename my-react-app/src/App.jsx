import { useEffect, useState } from "react";
import Card from "./Card";
import Student from "./Student.jsx";
import UserCard from "./UserCard";
import Button from "./component/button/Button.jsx";
import Button2 from "./component/button/Button2.jsx";
import ColorPicker from "./component/color_picker/ColorPicker.jsx";
import List from "./component/list/List.jsx";
import Form from "./component/usestate/Form.jsx";
import State from "./component/usestate/State.jsx";
import axios from "axios";

// fetch("https://catfact.ninja/fact")
//   .then((res) => res.json())
//   .then((data) => setCatFact(data.fact));

function App() {
  const [catFact, setCatFact] = useState("");
  const fetchCatFact = () => {
    axios
      .get("https://catfact.ninja/fact")
      .then((res) => setCatFact(res.data.fact));
  };
  useEffect(() => {
    fetchCatFact();
  }, []);

  // const apiData = [
  //   { id: 1, name: "Bopha", position: "Developer" },
  //   { id: 2, name: "Sokha", position: "Designer" },
  // ];

  return (
    <div>
      {/* CARD COMPONENT */}
      {/* <Card />
      <Card />
      <Card />
      <Card />
      <Card /> */}

      {/* PROPS */}
      {/* <Student name="Pheakdey" age={23} isStudent={true} />
      <Student name="Lyna" age="21" isStudent={true} />
      <Student name="Koka" age="6" isStudent={false} />
      <Student name="Laryy" /> */}
      {/* FETCH FROM API  */}
      {/* {apiData.map((user) => {
        return <UserCard key={user.id} id={user.id} name={user.name} />;
      })} */}

      {/* <Button2>Next</Button2>
      <Button2>Prev</Button2> */}

      {/* EVENT */}
      {/* <Button /> */}

      {/* STATE */}
      {/* <State /> */}
      {/* <Form /> */}

      {/* COLOR_PICKER_APP */}
      {/* <ColorPicker /> */}

      {/* LIST */}
      {/* <List /> */}

      <button onClick={fetchCatFact}>Generate Cat Fact</button>
      <p>{catFact}</p>
    </div>
  );
}

export default App;
