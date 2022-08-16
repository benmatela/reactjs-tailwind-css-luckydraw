import React, { useState } from "react";
import Card from "./Card";
import Spin from "./Spin";

const Play = () => {
  const findRange = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx);
  };
  const [cards, setCards] = useState(findRange(1, 50));

  const handleDrawClick = (randomNumber) => {
    setCards((current) =>
      current.filter((num) => {
        return num !== randomNumber;
      })
    );
  };

  return (
    <div className="w-full bg-black px-4 text-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div className="flex justify-center">
          <Spin handleDrawClick={handleDrawClick} />
        </div>
        <div id="cardsContainer">
          <div className="mx-auto grid md:grid-cols-4">
            <Card cards={cards} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Play;
