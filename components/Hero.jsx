import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute top-[300px] left-[150px] md:left-[250px] text-white uppercase">
        <div className="flex flex-col space-y-2">
          <h4 className="text-3xl">Upcoming Launch</h4>
          <h2 className="font-bold text-4xl">CRS-25 Mission</h2>

          <button className="mt-4 w-fit font-bold uppercase border-2 px-4 py-2 hover:bg-white hover:text-black">
            Rewatch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
