import React from "react";
import Card from "./Card";

function Board() {
  const findRange = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
  };
  const drawnNumbers = findRange(1, 50);

  return (
    <div>
      <p className="font-medium mx-auto text-white">
        Boxes will be popped if they match your draw
      </p>
      <Card drawnNumbers={drawnNumbers} />
    </div>
  );
}

export default Board;
