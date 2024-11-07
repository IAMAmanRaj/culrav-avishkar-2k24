import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md';

const TeamOptions = ({ teamName, onTeamNameChange, teamSize, onTeamSizeChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleOptionClick = (size) => {
    onTeamSizeChange(size);
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-2">
        <div className="w-full h-10">
          <h1 className="font-Sfpro text-[24px] text-white">Team Name</h1>
        </div>
        <input
          className="h-14 px-6 py-3 font-Sfpro text-[17px] text-white bg-lightMineshaft placeholder-gray- placeholder:font-Sfpro focus:ring-2 focus:ring-white focus:outline-none rounded-md"
          type="text"
          value={teamName}
          onChange={(e) => onTeamNameChange(e.target.value)}
          placeholder="Enter Name"
        />
      </div>

      <div className="flex flex-col gap-2" ref={dropdownRef}>
        <div className="w-full h-10">
          <h1 className="font-Sfpro text-[24px] text-white">Team Size</h1>
        </div>
        <div className="relative">
          <div
            className="w-full px-3 h-[46px] bg-lightMineshaft text-veryLightMineShaft hover:ring-2 hover:ring-white hover:outline-none font-Sfpro text-[18px] flex justify-between items-center cursor-pointer"
            onClick={toggleDropdown}
          >
            <span>{teamSize}</span>
            {isOpen ? (
              <MdArrowDropUp className="text-white" /> 
            ) : (
              <MdArrowDropDown className="text-white" /> 
            )}
          </div>

          <div
            className={`absolute z-10 transition-all duration-500 bg-scheduleLargeText w-full overflow-hidden ${
              isOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'
            }`}
            style={{ transition: 'max-height 0.3s ease, opacity 0.3s ease' }}
          >
            <div className="overflow-y-auto scrollbar-hidden h-[300px] flex flex-col gap-2 mt-2">
              {Array.from({ length: 100 }, (_, i) => i + 1).map((size) => (
                <div
                  key={size}
                  className="py-2 px-3 h-[46px] font-Sfpro text-veryLightMineShaft cursor-pointer bg-lightMineshaft hover:bg-medMineShaft"
                  onClick={() => handleOptionClick(size)}
                >
                  {size}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TeamOptions.propTypes = {
  teamName: PropTypes.string.isRequired,
  onTeamNameChange: PropTypes.func.isRequired,
  teamSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onTeamSizeChange: PropTypes.func.isRequired,
};

export default TeamOptions;
