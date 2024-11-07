import React from 'react';
import noise from '../../assets/Sc-assets/noise.png';
import grid from '../../assets/Sc-assets/Grid.png';
import elements from '../../assets/Sc-assets/element.png';

const Schedule = () => {
  return (
    <div className="relative z-20 w-full min-h-screen bg-[#202020] overflow-hidden">
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
        src={elements}
        alt="Design Elements"
        className="absolute top-0 left-0 w-full h-auto max-h-[200px] md:max-h-[400px] object-cover"
      />

      {/* Content */}
      <div className="relative z-10 top-[8rem] flex flex-col items-center justify-center px-4 py-8 md:py-16">
        {/* Header */}
        <h1
          className="text-white font-extrabold text-3xl md:text-5xl text-center"
          style={{ fontFamily: '"MOON GET!"' }}
        >
          DAY 1
        </h1>
        <p
          className="mt-2 text-[#F54E25] text-lg md:text-2xl font-extrabold"
          style={{ fontFamily: '"MOON GET!"' }}
        >
          November 9, 2024
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-[1220px] px-4 mb-[7rem]">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 p-2 w-full"
            >
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-4 bg-[#FFFAF0] 
                    p-4 rounded-lg shadow-sm w-full
                    hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
                >
                  {/* Header Label */}
                  <div className="flex justify-center items-center bg-[#181818] w-full h-10 rounded-t-lg">
                    <p
                      className="text-xs md:text-base text-white font-bold tracking-wide"
                      style={{
                        fontFamily: '"MOON GET!"',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                      }}
                    >
                      Spandan
                    </p>
                  </div>

                  <p
                    className="text-center uppercase text-lg md:text-2xl font-bold tracking-wide"
                    style={{
                      color: '#181818',
                      fontFamily: '"MOON GET!"',
                      letterSpacing: '0.84px',
                    }}
                  >
                    MR AND<br />MISS SPANDAN
                  </p>

                  <div className="flex justify-center items-center w-full h-10 bg-[#F54E25] rounded-b-lg">
                    <p
                      className="text-xs md:text-base font-extrabold text-[#FFFAF0] uppercase tracking-wider"
                      style={{ fontFamily: '"MOON GET!"' }}
                    >
                      09 AM - 10 AM
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedule;
