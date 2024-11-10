import React from 'react';
import { useLocation } from 'react-router-dom';
import noise from '../../assets/Sc-assets/noise.png';
import grid from '../../assets/Sc-assets/Grid.png';
import elements from '../../assets/Sc-assets/element.png';
import scheduleData from "../../data/Event/Schedule/data";

const Schedule = () => {
  const location = useLocation();
  const { dayData } = location.state || {};

  const renderEvents = (events) => {
    return events.map((event, index) => (
      <div
        key={index}
        className="flex flex-col items-center gap-6 p-2 w-full"
      >
        <div
          className="flex flex-col items-center gap-4 bg-[#FFFAF0] 
            p-4 rounded-lg shadow-sm w-full
            hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
        >
          <div className="flex justify-center items-center bg-[#181818] w-full h-10 rounded-t-lg">
            <p
              className="text-md md:text-base text-white font-bionix font-bold tracking-wide"
              style={{
                textTransform: 'uppercase',
                textAlign: 'center',
              }}
            >
              {event.category}
            </p>
          </div>

          <p
            className="text-center uppercase text-lg md:text-2xl font-moon font-bold tracking-wide"
            style={{
              color: '#585858',
              letterSpacing: '0.84px',
            }}
          >
            {event.title}
          </p>
          {event?.round && (
          <div className="flex justify-center items-center w-full h-10 bg-[#000000] rounded-b-lg">
            <p
              className="text-xs md:text-base font-bionix font-extrabold text-[#FFFAF0] uppercase tracking-wider"
            >
              {event?.round}
            </p>
          </div>)}
          <div className="flex justify-center items-center text-center w-full bg-[#585858] bg-opacity-95 rounded-b-lg">
  <p
    className="text-lg md:text-base font-extrabold font-Manrope w-[70%] text-[#FFFFFF] uppercase tracking-wider"
  >
    {event.time}
  </p>
</div>
          <div className="flex justify-center items-center w-full h-10 bg-[#F54E25] rounded-b-lg">
            <p
              className="text-xs md:text-base font-extrabold text-[#FFFAF0] uppercase tracking-wider"

            >
              {event.venue}
            </p>
          </div>
        </div>
      </div>
    ));
  };

  const renderSchedule = () => {
    if (!dayData || Object.keys(dayData).length === 0) {
      return Object.keys(scheduleData).map((dayKey) => {
        const { day, date, events } = scheduleData[dayKey];
        return (
          <div key={day} className="relative z-10 top-[8rem] flex flex-col items-center justify-center px-4 py-8 md:py-16">
            <h1
              className="text-white font-extrabold text-3xl md:text-5xl text-center"
              style={{ fontFamily: '"MOON GET!"' }}
            >
              {`DAY ${day}`}
            </h1>
            <p
              className="mt-2 text-[#F54E25] text-lg md:text-2xl font-extrabold"
              style={{ fontFamily: '"MOON GET!"' }}
            >
              {date}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-[1220px] px-4 mb-[7rem]">
              {renderEvents(events)}
            </div>
          </div>
        );
      });
    } else {
      const { date, events, day } = dayData;
      return (
        <div className="relative z-10 top-[8rem] flex flex-col items-center justify-center px-4 py-8 md:py-16">
          <h1
            className="text-white font-extrabold text-3xl md:text-5xl text-center"
            style={{ fontFamily: '"MOON GET!"' }}
          >
            {`DAY ${day}`}
          </h1>
          <p
            className="mt-2 text-[#F54E25] text-lg md:text-2xl font-extrabold"
            style={{ fontFamily: '"MOON GET!"' }}
          >
            {date}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-[1220px] px-4 mb-[7rem]">
            {renderEvents(events)}
          </div>
        </div>
      );
    }
  };

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

      {renderSchedule()}
    </div>
  );
};

export default Schedule;