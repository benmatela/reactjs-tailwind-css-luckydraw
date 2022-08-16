import React, { useState } from "react";
import Board from "./Board";
import Spin from "./Spin";

function Play() {
  const [draw, setDraw] = useState(0);

  const handleDrawClick = num => {
    setDraw(current => num);
  };

  return (
    <div className="w-full bg-black px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex justify-center">
          <Spin handleDrawClick={handleDrawClick} />
          {draw}
        </div>
        <Board />
      </div>
    </div>
  );
}

export default Play;
