import React, { useState } from "react";
import { Card } from "./Card";
import { Spin } from "./Spin";
import CelebrateImg from "../assets/celebrate.svg";

export const Play = () => {
  const findRange = (start, end) => {
    return Array(end - start + 1)
      .fill()
      .map((_, idx) => start + idx);
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
        <div className="flex">
          <Spin handleDrawClick={handleDrawClick} cards={cards}  />
        </div>
        <div id="cardsContainer">
          {cards.length === 0 ? (
            <div id="gameOver" className="flex flex-col mx-auto">
              <h1 className="mx-auto font-bold text-white">
                Congradulations! You won!
              </h1>
              <img
                src={CelebrateImg}
                alt="Celebrate"
                className="w-[900px] mx-auto my-4"/>
            </div>
          ) : (
            <div className="mx-auto grid md:grid-cols-4">
              <Card cards={cards} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
