import { useState } from "react";
import Profile from "../Profile/Profile";
import UploadResume from "../UploadResume/UploadResume";
import CreateTeam from "../CreateTeam/CreateTeam";
import { useNavigate } from "react-router-dom";
import userround from "../../../assets/userDashBoard/VerticalNavIcons/user-round.png";
import userroundplus from "@/assets/userDashBoard/VerticalNavIcons/user-round-plus.png";
import usersround from "@/assets/userDashBoard/VerticalNavIcons/users-round.png";
import Team from "../Team/index";
import Invitations from "../Invitation/index";
import { useDispatch } from "react-redux";
import { signoutSuccess } from "@/redux/auth/authSlice";
import Frame from "../../../assets/userDashBoard/VerticalNavIcons/Frame.png";
import History from "../../../assets/userDashBoard/VerticalNavIcons/History.png";
import logout from "../../../assets/userDashBoard/VerticalNavIcons/logout.png";
import toast, { Toaster } from "react-hot-toast";
import LogoutConfirmModal from "@/pages/modal/LogoutConfirmModal";
import { resetTeamState } from "@/redux/team/teamSlice";
import { useSelector } from "react-redux";
import ParticipatingTeams from "@/Components/AdminPanel/ParticipatingTeams";
import ListFeePaid from "@/Components/AdminPanel/ListFeePaid";
import MakeDC from "@/Components/AdminPanel/MakeDC";
import DeleteDC from "@/Components/AdminPanel/DeleteDC";
import AllDC from "@/Components/AdminPanel/AllDC";
import MembersNotVerified from "@/Components/AdminPanel/MembersNotVerified";
import AcceptedMembersForAnEvent from "@/Components/AdminPanel/DownloadComponents/AcceptedMembersForAnEvent";
import { useLocation } from "react-router-dom";

const VerticalSideBar = ({ activeItem, setActiveItem }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);

  const user = useSelector((state) => state.user.currentUser);
  const role = user?.role;

  const path = useLocation().pathname;

  const handleLogout = () => {
    setConfirmModalOpen(true);
  };

  const renderPageContent = () => {
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
            dispatch(resetTeamState());
            toast("Logout Successfully !", {
              icon: "🚀",
              duration: 2000,
              className: "toast-blue",
            });
            navigate("/login");
          }}
          themeColor="white"
        />
      )}
      <div className="flex">
        <div className="hidden md:block md:w-[26vw] custom1000:w-[20vw] custom1840:w-[17vw] w-[20vw] h-[100vh] bg-scheduleLargeText">
          <div className="h-[128px]"></div>
          <div className="h-full relative flex flex-col gap-4 text-mineShaft w-full p-5 font-Manrope text-[16px]">
            <div
              className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all duration-200 ${
                activeItem === "Profile"
                  ? "bg-white text-zinc-700"
                  : "hover:text-zinc-700 hover:bg-white"
              }`}
              onClick={() => setActiveItem("Profile")}
            >
              <img
                className={`w-[24px] h-[24px] filter transition-all group-hover:brightness-0 ${
                  activeItem === "Profile" ? "brightness-0" : ""
                }`}
                src={userround}
                alt=""
              />
              <h1 className="relative top-[0.7px]">Profile</h1>
            </div>
            

            <div className="flex flex-col gap-1">
              {role === "User" && path === "/dashboard" ? (
                <>
                  <div
                    className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all duration-200 ${
                      activeItem === "Upload Resume"
                        ? "bg-white text-zinc-700"
                        : "hover:text-zinc-700 hover:bg-white"
                    }`}
                    onClick={() => setActiveItem("Upload Resume")}
                  >
                    <img
                      className={`w-[24px] h-[24px] filter transition-all group-hover:brightness-0 ${
                        activeItem === "Upload Resume" ? "brightness-0" : ""
                      }`}
                      src={History}
                      alt=""
                    />
                    <h1>Upload Resume</h1>
                  </div>

                  <div
                    className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all duration-200 ${
                      activeItem === "My Teams"
                        ? "bg-white text-zinc-700"
                        : "hover:text-zinc-700 hover:bg-white"
                    }`}
                    onClick={() => setActiveItem("My Teams")}
                  >
                    <img
                      className={`w-[24px] h-[24px] filter transition-all group-hover:brightness-0 ${
                        activeItem === "My Teams" ? "brightness-0" : ""
                      }`}
                      src={usersround}
                      alt=""
                    />
                    <h1>My Teams</h1>
                  </div>

                  <div
                    className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all hover:text-zinc-700 duration-200 ${
                      activeItem === "Create Team"
                        ? "bg-white text-zinc-700"
                        : "hover:text-zinc-700 hover:bg-white"
                    }`}
                    onClick={() => setActiveItem("Create Team")}
                  >
                    <img
                      className={`w-[24px] h-[24px] filter transition-all group-hover:brightness-0 ${
                        activeItem === "Create Team" ? "brightness-0" : ""
                      }`}
                      src={userroundplus}
                      alt=""
                    />
                    <h1>Create Team</h1>
                  </div>

                  <div
                    className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all hover:text-zinc-700 duration-200 ${
                      activeItem === "View Invitation"
                        ? "bg-white text-zinc-700"
                        : "hover:text-zinc-700 hover:bg-white"
                    }`}
                    onClick={() => setActiveItem("View Invitation")}
                  >
                    <img
                      className={`w-[24px] h-[24px] filter transition-all group-hover:brightness-0 ${
                        activeItem === "View Invitation" ? "brightness-0" : ""
                      }`}
                      src={Frame}
                      alt=""
                    />
                    <h1>View Invitation</h1>
                  </div>
                </>
              ) : path === "/admin-panel" ? (
                role === "admin" || role === "FS" ? (
                  <>
                    <div
                      className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all duration-200 ${
                        activeItem === "Participating Teams List"
                          ? "bg-white text-zinc-700"
                          : "hover:text-zinc-700 hover:bg-white"
                      }`}
                      onClick={() => setActiveItem("Participating Teams List")}
                    >
                      <h1>Participating Teams List</h1>
                    </div>

                    <div
                      className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all duration-200 ${
                        activeItem === "List of fee paid members"
                          ? "bg-white text-zinc-700"
                          : "hover:text-zinc-700 hover:bg-white"
                      }`}
                      onClick={() => setActiveItem("List of fee paid members")}
                    >
                      <h1>List of fee paid members</h1>
                    </div>

                    <div
                      className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all hover:text-zinc-700 duration-200 ${
                        activeItem === "Download accepted team members for an event"
                          ? "bg-white text-zinc-700"
                          : "hover:text-zinc-700 hover:bg-white"
                      }`}
                      onClick={() => setActiveItem("Download accepted team members for an event")}
                    >
                      <h1>Download accepted team members for an event</h1>
                    </div>

                    <div
                      className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all hover:text-zinc-700 duration-200 ${
                        activeItem === "Make departmental coordinator"
                          ? "bg-white text-zinc-700"
                          : "hover:text-zinc-700 hover:bg-white"
                      }`}
                      onClick={() => setActiveItem("Make departmental coordinator")}
                    >
                      <h1>Make departmental coordinator</h1>
                    </div>
                    <div
                      className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all hover:text-zinc-700 duration-200 ${
                        activeItem === "Get all departmental coordinators list"
                          ? "bg-white text-zinc-700"
                          : "hover:text-zinc-700 hover:bg-white"
                      }`}
                      onClick={() => setActiveItem("Get all departmental coordinators list")}
                    >
                      <h1>Get all departmental coordinators list</h1>
                    </div>
                    <div
                      className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all hover:text-zinc-700 duration-200 ${
                        activeItem === "Delete departmental coordinator"
                          ? "bg-white text-zinc-700"
                          : "hover:text-zinc-700 hover:bg-white"
                      }`}
                      onClick={() => setActiveItem("Delete departmental coordinator")}
                    >
                      <h1>Delete departmental coordinator</h1>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all hover:text-zinc-700 duration-200 ${
                        activeItem === "Participating Teams List"
                          ? "bg-white text-zinc-700"
                          : "hover:text-zinc-700 hover:bg-white"
                      }`}
                      onClick={() => setActiveItem("Participating Teams List")}
                    >
                      <h1>Participating Teams List</h1>
                    </div>
                    <div
                      className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all hover:text-zinc-700 duration-200 ${
                        activeItem === "Download accepted team members for an event"
                          ? "bg-white text-zinc-700"
                          : "hover:text-zinc-700 hover:bg-white"
                      }`}
                      onClick={() => setActiveItem("Download accepted team members for an event")}
                    >
                      <h1>Download accepted team members for an event</h1>
                    </div>
                  </>
                )
              ) : null}
            </div>

            <div className="absolute bottom-[24vh] cursor-pointer flex flex-col-reverse">
              <div className="flex gap-3" onClick={handleLogout}>
                <img src={logout} alt="" />
                <h1>Logout</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-grow">{renderPageContent()}</div>
        <Toaster />
      </div>
    </>
  );
};

export default VerticalSideBar;