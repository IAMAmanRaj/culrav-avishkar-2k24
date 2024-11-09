import PropTypes from 'prop-types';

const ScheduleCard = ({ day, date }) => {
    

  const textColor = day >= 5 ? 'text-scheduleOrange' : 'text-scheduleLargeText';
  const rotate5 = day == 5 ? 'transform rotate-[3deg] md:-rotate-[3deg]': '';
  const rotate6 = day == 6 ? 'transform -rotate-[2.3deg] md:rotate-[4deg]': '';
  const rotate7 = day == 7 ? 'transform -rotate-[3.5deg]': '';
  const rotate4 = day == 4 ? 'md:transform md:rotate-[3.5deg]': '';

  return (
    <div className={`w-36 h-32 md:w-[236px] md:h-[201px] font-moon ${rotate5} ${rotate6} ${rotate7} ${rotate4}`}
    >
      <div className="h-[80%] md:h-[78%] font-bold px-3 py-1 md:px-5 md:py-3 leading-[38px] md:leading-[59px] relative bg-floralWhite ">
        <div className="absolute font-moon bg-zinc-900 md:w-[80px] mb-2 w-[50px] h-7 md:h-9 bottom-3 right-3 rounded-[6px] flex items-center justify-center">
          <p className="tracking-wide text-[0.6rem] md:text-[1rem] text-white">DAY {day}</p>
        </div>
        <h1 className={`mt-1 text-[40px] md:text-[55px] tracking-wide mb-1 md:leading-[3.8rem] ${textColor}`}>
          NOV
        </h1>
        <h1 className={`mt-2 text-[40px] md:text-[55px] tracking-wide ${textColor}`}>
          {date}
        </h1>
      </div>
      <div className="h-[20%] font-bold bg-zinc-400">
        <a href="/" className="text-[0.8rem] md:text-xl tracking-wider flex justify-center items-center h-full w-full font-moon">
          GET SCHEDULE
        </a>
      </div>
    </div>
  );
};

ScheduleCard.propTypes = {
  day: PropTypes.number.isRequired,
  date: PropTypes.number.isRequired,
};

export default ScheduleCard;
