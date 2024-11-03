import { useState } from "react";
import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/20/solid";
import useAuth from "@/lib/useAuth.js";
import getUser from "@/Components/UserDashBoard/userService.js";
import { registerForEvent } from "../Avishkar/service";
import toast from "react-hot-toast";

const TeamRegisterModal = ({ teams, onClose, themeColor, isOpen }) => {
  const [selectedTeam, setSelectedTeam] = useState(null);

  const isWhiteTheme = themeColor === "white";
  const modalBg = isWhiteTheme ? "bg-white" : "bg-gray-900";
  const textColor = isWhiteTheme ? "text-black" : "text-white";
  const borderColor = isWhiteTheme ? "border-gray-300" : "border-gray-700";
  const selectedBgColor = isWhiteTheme ? "bg-orange-500" : "bg-orange-500";
  const { token, user } = getUser();

  const handleSelect = (team) => {
    setSelectedTeam(team);
  };

  const handleRegister = async () => {
    try {
      const res = await registerForEvent({
        eventName: eventData.eventName,
        teamId: selectedTeam._id,
        userId: user._id,
        eventId: eventData.eventId,
        department: eventData.department,
        minTeamSize: eventData.minTeamSize,
        maxTeamSize: eventData.maxTeamSize,
        token,
      });

      if (res?.success) {
        toast.success(res?.message);
      } else {
        toast.error(`Error! ${res?.message}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      className={`relative ${textColor} ${modalBg} w-[90%] max-w-md p-6 rounded-lg shadow-lg text-center`}
      ariaHideApp={true}
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
            <span>{team}</span>
            <input
              type="checkbox"
              checked={selectedTeam === team}
              onChange={() => handleSelect(team)}
              className="form-checkbox checkbox-orange"
            />
          </label>
        ))}
      </div>

      <button
        onClick={() => alert(`Registered with team: ${selectedTeam}`)}
        className={`font-bionix mt-4 w-full ${selectedBgColor} ${
          textColor === "text-black" ? "text-white" : "text-white"
        } font-semibold py-2 rounded hover:bg-orange-600 transition`}
      >
        REGISTER
      </button>
    </Modal>
  );
};

export default TeamRegisterModal;
