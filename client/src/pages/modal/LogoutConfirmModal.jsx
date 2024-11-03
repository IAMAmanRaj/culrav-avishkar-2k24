import Modal from "react-modal";
import { XMarkIcon } from "@heroicons/react/20/solid";

const LogoutConfirmModal = ({ isOpen, onClose, onConfirm, themeColor }) => {
  const isWhiteTheme = themeColor === "white";
  const modalBg = isWhiteTheme ? "bg-white" : "bg-gray-900";
  const textColor = isWhiteTheme ? "text-black" : "text-white";
  const buttonBgColor = "bg-orange-500";
  const buttonHoverColor = "hover:bg-orange-600";

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      className={`relative ${textColor} ${modalBg} w-[90%] max-w-md p-6 rounded-lg shadow-lg text-center`}
      ariaHideApp={false}
    >
      <button
        className={`absolute top-3 right-3 ${textColor} hover:text-gray-400`}
        onClick={onClose}
      >
        <XMarkIcon className="h-6 w-6" />
      </button>

      <h2 className="text-2xl font-bold mb-4">Confirm Logout</h2>
      <p className="mb-6">Are you sure you want to log out?</p>

      <div className="flex justify-center gap-4">
        <button
          onClick={onConfirm}
          className={`px-6 py-2 rounded ${buttonBgColor} ${
            textColor === "text-black" ? "text-white" : "text-white"
          } font-semibold ${buttonHoverColor} transition`}
        >
          Confirm
        </button>
        <button
          onClick={onClose}
          className="px-6 py-2 rounded bg-gray-300 text-black font-semibold hover:bg-gray-400 transition"
        >
          Cancel
        </button>
      </div>
    </Modal>
  );
};

export default LogoutConfirmModal;
