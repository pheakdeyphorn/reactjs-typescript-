import { useState } from "react";
import quotes from "./quote.jsx";
import FancyText from "./FancyText.jsx";

export default function InspirationGenerator() {
  const [index, setIndex] = useState(0);
  const quote = quotes[index];

  const handleNext = () => {
    setIndex((index + 1) % quotes.length);
  };

  return (
    <>
      <p>Your inspirational quote is:</p>
      <FancyText text={quote} />
      <button onClick={handleNext}>Get inpire more</button>
    </>
  );
}
