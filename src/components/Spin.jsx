import React, { useState } from "react";

function Spin() {
  const [generatedNumber, setGeneratedNumber] = useState(0);

  const generatedRandomNumber = () => {
    let min = 1;
    let max = 20;
    const random = min + Math.random() * (max - min);
    return random;
  };

  const handleGenerateRandom = () => {
    setGeneratedNumber(generatedRandomNumber());
  };

  return (
    <div className="w-full bg-black">
      <div className="flex flex-col justify-center mx-auto">
        <p className="font-bold mx-auto mt-2 text-[#00df9a]">
          HIT THE SPIN BUTTON TO GET STARTED!
        </p>
        <h1 className="mx-auto text-white md:text-4xl sm:text-3xl text-2xl font-bold">
          {generatedNumber}
        </h1>
        <button
          className="py-3 my-6 bg-[#00df9a] text-[#000300] w-[200px] rounded-md font-medium mx-auto"
          onClick={handleGenerateRandom}
        >
          Spin!
        </button>
      </div>
    </div>
  );
}

export default Spin;
