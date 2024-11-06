import React from 'react';
import noise from '../../assets/Sc-assets/noise.png';
import grid from '../../assets/Sc-assets/Grid.png';
import elements from '../../assets/Sc-assets/element.png';

const Schedule = () => {
  return (
    <div className="relative w-full h-screen md:h-[1634px] bg-[#202020]">
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
        className="absolute top-0 left-0 w-full h-auto max-h-[400px] object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-16 md:py-32">
        <h1
          className="text-white font-extrabold"
          style={{
            fontFamily: '"MOON GET!"',
            fontSize: '48px',
            fontStyle: 'normal',
            lineHeight: 'normal',
          }}
        >
          DAY 1
        </h1>
        <p
          className="mt-4"
          style={{
            color: '#F54E25',
            fontFamily: '"MOON GET!"',
            fontSize: '24px',
            fontWeight: '800',
            fontStyle: 'normal',
            lineHeight: 'normal',
          }}
        >
          November 9, 2024
        </p>

        <div className="flex flex-col items-center gap-6 mt-16 md:grid md:grid-cols-3 md:gap-8 md:w-[1220px] w-full p-2">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="flex flex-col items-center md:items-start sm:gap-4 gap-8 p-2">
              {/* 3 Inner Boxes */}
              {[1, 2, 3].map((_, i) => (
                <div
                  key={i}
                  className="flex flex-row items-center justify-between gap-4 bg-[#FFFAF0] 
                    sm:w-[320px] sm:h-[auto] sm:flex-row 
                    md:w-[368px] md:h-auto md:flex-col md:justify-end md:pt-[10px] md:gap-[23px]
                    hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out overflow-hidden"
                >
                  <div className="flex justify-center items-center bg-[#181818] 
                    sm:w-[33px] sm:h-[13px] flex-shrink-0 
                    md:w-[100px] md:h-[40px]">
                    <p
                      className="text-xs sm:text-sm md:text-lg text-white font-bold tracking-wide"
                      style={{
                        color: '#FFFAF0',
                        fontFamily: '"MOON GET!"',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                      }}
                    >
                      Spandan
                    </p>
                  </div>

                  <p
                    className="text-center uppercase mt-4 md:mt-8 md:text-lg font-bold tracking-wide"
                    style={{
                      color: '#181818',
                      fontFamily: '"MOON GET!"',
                      fontSize: '24px',
                      letterSpacing: '0.84px',
                    }}
                  >
                    MR AND<br />MISS SPANDAN
                  </p>

                  <div className="flex justify-center items-center h-[100%] bg-[#F54E25] sm:h-[50px] sm:w-full sm:flex-col sm:justify-center">
                    <p
                      style={{
                        color: '#FFFAF0',
                        fontFamily: '"MOON GET!"',
                        fontSize: '12px',
                        fontWeight: '800',
                        letterSpacing: '0.72px',
                        textTransform: 'uppercase',
                      }}
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