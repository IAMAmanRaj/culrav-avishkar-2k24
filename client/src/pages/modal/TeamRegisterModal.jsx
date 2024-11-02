import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/20/solid";
import useAuth from "@/lib/useAuth.js";
import getUser from "@/Components/UserDashBoard/userService.js";
import { registerForEvent } from "../Avishkar/service";
import toast from "react-hot-toast";

const TeamRegisterModal = ({ teams, onClose, themeColor, eventData }) => {
  const [selectedTeam, setSelectedTeam] = useState({});

  const isWhiteTheme = themeColor === "white";
  const modalBg = isWhiteTheme ? "bg-white" : "bg-gray-900";
  const textColor = isWhiteTheme ? "text-black" : "text-white";
  const borderColor = isWhiteTheme ? "border-gray-300" : "border-gray-700";
  const selectedBgColor = isWhiteTheme ? "bg-orange-500" : "bg-orange-500";
  const {token, user} = getUser()

  const handleSelect = (team) => {
    setSelectedTeam(team);
  };

  const handleRegister = async() => {
    try{
      const res = await registerForEvent({eventName : eventData.eventName, teamId : selectedTeam._id, 
        userId : user._id, eventId:eventData.eventId, department: eventData.department, 
        minTeamSize : eventData.minTeamSize, maxTeamSize : eventData.maxTeamSize, token}
      )

      if(res?.success){
        toast.success(res?.message)
      }else{
        toast.error(`Error! ${res?.message}`)
      }
    }catch(err){
      console.log(err)
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div
        className={`relative ${textColor} ${modalBg} w-[90%] max-w-md p-6 rounded-lg shadow-lg text-center`}
      >
        <button
          className={`absolute top-3 right-3 ${textColor} hover:text-gray-400`}
          onClick={onClose}
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <h2
          className={`font-bionix text-2xl font-bold mb-4 font-bebas ${textColor}`}
        >
          Choose a team to register with
        </h2>
        <div
          className={`overflow-y-auto max-h-60 border rounded-md p-2 custom-scrollbar-modal ${borderColor} ${modalBg}`}
        >
          {teams.map((team, index) => (
            <label
              key={index}
              className={`flex items-center rounded-sm justify-between px-4 py-2 cursor-pointer border-b font-bebas ${
                selectedTeam === team
                  ? `text-white ${selectedBgColor}`
                  : "border-transparent"
              }`}
              onClick={() => handleSelect(team)}
            >
              <span>{team.teamName}</span>
              <input
                type="checkbox"
                checked={selectedTeam === team}
                onChange={() => handleSelect(team)}
                className={`form-checkbox checkbox-orange`}
              />
            </label>
          ))}
        </div>

        <button
          onClick={handleRegister}
          className={`font-bionix mt-4 w-full ${selectedBgColor} ${
            textColor == "text-black" ? "text-white" : "text-white"
          } font-semibold py-2 rounded hover:bg-orange-600 transition`}
        >
          REGISTER
        </button>
      </div>
    </div>
  );
};

export default TeamRegisterModal;
