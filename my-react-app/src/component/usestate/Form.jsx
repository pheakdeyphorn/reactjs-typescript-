import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const fullName = firstName + " " + LastName;

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);

  return (
    <>
      <input type="text" value={firstName} onChange={handleFirstName} />
      <br />
      <input type="text" value={LastName} onChange={handleLastName} />
      <p>Hello {fullName}</p>
    </>
  );
}
