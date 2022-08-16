import React, { useState } from "react";

const Spin = ({ handleDrawClick }) => {
  const [generatedNumber, setGeneratedNumber] = useState(0);

  const generatedRandomNumber = (min, max) => {
    return Math.round(min + Math.random() * (max - min));
  };

  const handleGenerateRandom = () => {
    const random = generatedRandomNumber(1, 50);
    handleDrawClick(random);
    setGeneratedNumber(random);
  };

  return (
    <div className="w-full bg-black">
      <div className="flex flex-col justify-center mx-auto">
        <p className="font-medium mx-auto mt-2 text-white">
          Hit the 'Spin!' button to get started..
        </p>
        <h1 className="mx-auto text-white md:text-4xl sm:text-3xl text-2xl font-bold">
          {generatedNumber}
        </h1>
        <button
          className="py-3 my-6 bg-[#00df9a] text-[#000300] w-[200px] rounded-md font-medium mx-auto"
          onClick={handleGenerateRandom}>
          Spin!
        </button>
        <p className="font-medium mx-auto mt-2 text-white">
          Boxes will be popped if they match your draw
        </p>
      </div>
    </div>
  );
}

export default Spin;
