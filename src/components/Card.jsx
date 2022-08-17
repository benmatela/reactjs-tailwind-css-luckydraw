import React from "react";

const Card = (props) => {
  return props.cards.map((num, i) => {
    return (
      <div
        key={num}
        className="flex py-1 my-1 bg-[#00df9a] text-[#000300] w-[98%] rounded-md font-medium">
        <p className="mx-auto">{num}</p>
      </div>
    );
  });
};

export default Card;
