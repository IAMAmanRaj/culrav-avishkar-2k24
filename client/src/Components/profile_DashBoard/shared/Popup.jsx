import { useState, useEffect, useRef } from "react";
import Profile from "../Profile/Profile";
import UploadResume from "../UploadResume/UploadResume";
import CreateTeam from "../CreateTeam/CreateTeam";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signoutSuccess } from "@/redux/auth/authSlice";
import Team from "../Team/index";
import Invitations from "../Invitation";
import toast from "react-hot-toast";
import LogoutConfirmModal from "@/pages/modal/LogoutConfirmModal";
import ParticipatingTeams from "@/Components/AdminPanel/ParticipatingTeams";
import ListFeePaid from "@/Components/AdminPanel/ListFeePaid";
import MakeDC from "@/Components/AdminPanel/MakeDC";
import DeleteDC from "@/Components/AdminPanel/DeleteDC";
import AllDC from "@/Components/AdminPanel/AllDC";
import MembersNotVerified from "@/Components/AdminPanel/MembersNotVerified";
import AcceptedMembersForAnEvent from "@/Components/AdminPanel/DownloadComponents/AcceptedMembersForAnEvent";
import { useLocation } from "react-router-dom";

const Popup = ({ activeItem, setActiveItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const user = useSelector((state) => state.user.currentUser);
  const role = user?.role;
  const path = useLocation().pathname;

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (item) => {
    setActiveItem(item);
    toggle();
  };

  const handleLogout = () => {
    setConfirmModalOpen(true);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const renderPageContent = () => {
    console.log(activeItem);
    switch (activeItem) {
      case "Profile":
        return <Profile />;
      case "Upload Resume":
        return <UploadResume />;
      case "My Teams":
        return <Team />;
      case "Create Team":
        return <CreateTeam />;
      case "View Invitation":
        return <Invitations />;
      case "Participating Teams List":
        return <ParticipatingTeams />;
      case "List of fee paid members":
        return role === "admin" ? <ListFeePaid /> : <div>Select a Page</div>;
      case "Download accepted team members for an event":
        return <AcceptedMembersForAnEvent />;
      case "Make departmental coordinator":
        return role === "admin" ? <MakeDC /> : <div>Select a Page</div>;
      case "Get all departmental coordinators list":
        return role === "admin" ? <AllDC /> : <div>Select a Page</div>;
      case "Delete departmental coordinator":
        return role === "admin" ? <DeleteDC /> : <div>Select a Page</div>;
      case "Payment not verified":
        return role === "admin" ? <MembersNotVerified /> : <div>Select a Page</div>;
      default:
        return <div>Select a Page</div>;
    }
  };

  return (
    <>
      {confirmModalOpen && (
        <LogoutConfirmModal
          isOpen={confirmModalOpen}
          onClose={() => {
            setConfirmModalOpen(false);
          }}
          onConfirm={() => {
            dispatch(signoutSuccess());
            toast.success("Logout Successfully!", {
              style: {
                marginTop: "50px",
              },
            });
            navigate("/login");
          }}
          themeColor="white"
        />
      )}
      <div className="md:hidden">
        <div ref={popupRef} className="relative">
          <div
            className={`md:hidden w-[100vw] fixed transition-all flex flex-col gap-8 justify-center items-center font-Sfpro text-[18px] duration-1000 h-[500px] bg-scheduleLargeText border-0 top-[0] z-[20] rounded-b-[46px] ${
              isOpen ? "transform translate-y-[0px]" : "transform translate-y-[-399px]"
            }`}
          >
            <ul className="flex flex-col gap-5 justify-center items-center text-mineShaft">
              {role === "User" && path === "/dashboard" ? (
                <>
                  <li
                    className={`hover:text-customOrange cursor-pointer ${
                      activeItem === "Profile" ? "text-customOrange" : ""
                    }`}
                    onClick={() => handleNavigation("Profile")}
                  >
                    Profile
                  </li>
                  <li
                    className={`hover:text-customOrange cursor-pointer ${
                      activeItem === "Upload Resume" ? "text-customOrange" : ""
                    }`}
                    onClick={() => handleNavigation("Upload Resume")}
                  >
                    Upload Resume
                  </li>
                  <li
                    className={`hover:text-customOrange cursor-pointer ${
                      activeItem === "My Teams" ? "text-customOrange" : ""
                    }`}
                    onClick={() => handleNavigation("My Teams")}
                  >
                    My Teams
                  </li>
                  <li
                    className={`hover:text-customOrange cursor-pointer ${
                      activeItem === "Create Team" ? "text-customOrange" : ""
                    }`}
                    onClick={() => handleNavigation("Create Team")}
                  >
                    Create Team
                  </li>
                  <li
                    className={`hover:text-customOrange cursor-pointer ${
                      activeItem === "View Invitation" ? "text-customOrange" : ""
                    }`}
                    onClick={() => handleNavigation("View Invitation")}
                  >
                    View Invitation
                  </li>
                </>
              ) : path === "/admin-panel" ? (
                role === "admin" || role === "FS" ? (
                  <>
                    <li
                      className={`hover:text-customOrange cursor-pointer ${
                        activeItem === "Participating Teams List" ? "text-customOrange" : ""
                      }`}
                      onClick={() => handleNavigation("Participating Teams List")}
                    >
                      Participating Teams List
                    </li>
                    <li
                      className={`hover:text-customOrange cursor-pointer ${
                        activeItem === "List of fee paid members" ? "text-customOrange" : ""
                      }`}
                      onClick={() => handleNavigation("List of fee paid members")}
                    >
                      List of fee paid members
                    </li>
                    <li
                      className={`hover:text-customOrange cursor-pointer ${
                        activeItem === "Download accepted team members for an event"
                          ? "text-customOrange"
                          : ""
                      }`}
                      onClick={() => handleNavigation("Download accepted team members for an event")}
                    >
                      Download accepted team members for an event
                    </li>
                    <li
                      className={`hover:text-customOrange cursor-pointer ${
                        activeItem === "Make departmental coordinator" ? "text-customOrange" : ""
                      }`}
                      onClick={() => handleNavigation("Make departmental coordinator")}
                    >
                      Make departmental coordinator
                    </li>
                    <li
                      className={`hover:text-customOrange cursor-pointer ${
                        activeItem === "Get all departmental coordinators list" ? "text-customOrange" : ""
                      }`}
                      onClick={() => handleNavigation("Get all departmental coordinators list")}
                    >
                      Get all departmental coordinators list
                    </li>
                    <li
                      className={`hover:text-customOrange cursor-pointer ${
                        activeItem === "Delete departmental coordinator" ? "text-customOrange" : ""
                      }`}
                      onClick={() => handleNavigation("Delete departmental coordinator")}
                    >
                      Delete departmental coordinator
                    </li>
                  </>
                ) : (
                  <>
                    <li
                      className={`hover:text-customOrange cursor-pointer ${
                        activeItem === "Participating Teams List" ? "text-customOrange" : ""
                      }`}
                      onClick={() => handleNavigation("Participating Teams List")}
                    >
                      Participating Teams List
                    </li>
                    <li
                      className={`hover:text-customOrange flex text-center cursor-pointer ${
                        activeItem === "Download accepted team members for an event"
                          ? "text-customOrange"
                          : ""
                      }`}
                      onClick={() => handleNavigation("Download accepted team members for an event")}
                    >
                      Download accepted team members for an event
                    </li>
                  </>
                )
              ) : null}
            </ul>

            <button
              onClick={handleLogout}
              className="w-[160px] h-[40px] bg-register border-0 rounded-sm text-white"
            >
              Logout
            </button>

            <div className="absolute bottom-0 right-0 w-full flex justify-center">
              <button onClick={toggle} className="text-white rounded-full p-2">
                {isOpen ? <FiChevronUp size={24} /> : <FiChevronDown size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Popup;