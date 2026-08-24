function Student(props) {
  return (
    <div>
      <h2>Name: {props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

// Default Props
// function Student({ name = "Guest", age = 0, isStudent = false }) {
//   return (
//     <div style={{ border: "1px solid black", margin: "10px", padding: "10px" }}>
//       <h2>Name: {name}</h2>
//       <p>Age: {age}</p>
//       <p>Student: {isStudent ? "Yes" : "No"}</p>
//     </div>
//   );
// }

export default Student;
