import React from "react";

const SectionD = () => {
  return (
    <div className="relative h-screen bg-[url('/img/section-d.webp')] bg-center bg-cover">
      <div className="absolute top-[400px] left-[130px] md:left-[250px] text-white uppercase z-30">
        <div className="flex flex-col space-y-2">
          <h4 className="text-3xl">Recent Launch</h4>
          <h2 className="font-bold text-4xl">SES-22 Mission</h2>

          <button className="mt-4 w-fit font-bold uppercase border-2 px-4 py-2 hover:bg-white hover:text-black">
            Rewatch
          </button>
        </div>
      </div>
    </div>
  );
};

export default SectionD;
