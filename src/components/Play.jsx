import React, { useState } from "react";
import Card from "./Card";
import Spin from "./Spin";

function Play() {
  const [draw, setDraw] = useState(0);

  const findRange = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
  };

  const cards = findRange(1, 50);

  const handleDrawClick = (num) => {
    setDraw(num);
  };

  return (
    <div className="w-full bg-black px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex justify-center">
          <Spin handleDrawClick={handleDrawClick} />
        </div>
        <div>
          <p className="font-medium mx-auto mt-2 text-white">
            Boxes will be popped if they match your draw
          </p>
          <div className="mx-auto grid md:grid-cols-4">
            <Card cards={cards} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Play;
