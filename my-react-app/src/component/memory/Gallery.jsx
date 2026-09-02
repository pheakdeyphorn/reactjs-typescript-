import React, { useState } from "react";
import { sculptureList } from "./data";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleNext = () => {
    setIndex((index + 1) % sculptureList.length);
  };

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  let sculpture = sculptureList[index];

  return (
    <div>
      <button onClick={handleNext}>Next</button>
      <h2>
        <i>
          {sculpture.name} by {sculpture.artist}
        </i>
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>

      <button onClick={handleShowMore}>{showMore ? "Hide" : "Show"}</button>

      <img src={sculpture.url} alt={sculpture.alt} />
      {showMore && <p>{sculpture.description}</p>}
    </div>
  );
}
