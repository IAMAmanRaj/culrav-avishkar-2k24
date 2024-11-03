import React from "react";
import noise from "../../assets/Sc-assets/noise.png";
import grid from "../../assets/Sc-assets/Grid.png";
import triangle from "../../assets/Sc-assets/triangle.png";

const Sponsors = () => {
  return (
    <div className="relative w-full min-h-screen md:h-[1634px] bg-[#202020] flex flex-col items-center justify-begin px-4 sm:px-8 pt-20">
      <img
        src={noise}
        alt="Noise Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src={grid}
        alt="Grid Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <img
        src={triangle}
        alt="Design Elements"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-begin py-20 lg: py-4">
        <h1 className="text-white font-[Bionix] text-[48px] sm:text-[64px] font-extrabold text-center mb-8">
          SPONSORS
        </h1>

        <div className="w-full max-w-5xl mx-auto mt-10 space-y-8">
          {[1, 2, 3].map((section) => (
            <div key={section} className="flex flex-col items-center">
              <h2 className="text-[#F54E25] font-[Bionix] text-[32px] sm:text-[48px] font-extrabold mb-5 text-center">
                ASSOCIATE SPONSOR
              </h2>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-10 lg:gap-80">
                <div className="w-[300px] h-[120px] sm:w-[386px] sm:h-[144px] bg-[#F54E25] flex items-center justify-center mx-auto mb-4 md:mb-0 md:mx-0 rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out">
                  <p className="text-white font-[Bebas Neue] text-[32px] sm:text-[48px] font-normal">
                    SPONSOR
                  </p>
                </div>
                <div className="w-[300px] h-[120px] sm:w-[386px] sm:h-[144px] bg-[#F54E25] flex items-center justify-center mx-auto mb-4 md:mb-0 md:mx-0 rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out">
                  <p className="text-white font-[Bebas Neue] text-[32px] sm:text-[48px] font-normal">
                    SPONSOR
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
