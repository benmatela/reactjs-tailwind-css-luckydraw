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
      <div className="mx-auto grid md:grid-cols-4">
        <Card drawnNumbers={drawnNumbers} />
      </div>
    </div>
  );
}

export default Board;
