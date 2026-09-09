import React, { useState } from "react";

export default function StateObject() {
  const [student, setStudent] = useState({
    name: "Unknown",
    age: 1,
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setStudent({
      ...student,
      //   name: e.target.value,
      //   age: e.target.value,
      [name]: value,
    });
  };

  //   const handleOnChangeName = (e) => {
  //     setStudent({
  //       ...student,
  //       name: e.target.value,
  //     });
  //   };
  //   const handleOnChangeAge = (e) => {
  //     setStudent({
  //       ...student,
  //       age: e.target.value,
  //     });
  //   };
  return (
    <div>
      <form action="">
        <input type="text" name="name" onChange={handleOnChange} />
        <p>Name: {student.name}</p>
        <input type="number" name="age" onChange={handleOnChange} />
        <p>Age: {student.age}</p>
      </form>
    </div>
  );
}
