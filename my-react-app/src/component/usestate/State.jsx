import { useState } from "react";

export default function State() {
  let [count, setCount] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
        }}
      >
        Click
      </button>

      <h1>{count}</h1>
    </>
  );
}
