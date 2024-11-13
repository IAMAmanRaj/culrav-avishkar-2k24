import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import ParticipatingTeams from "./ParticipatingTeams";
import ListFeePaid from "./ListFeePaid";
import MakeDC from "./MakeDC";
import DeleteDC from "./DeleteDC";
import AllDC from "./AllDC";
import MembersNotVerified from "./MembersNotVerified";
import AcceptedTeamMembersAllEvents from "./DownloadComponents/AcceptedTeamMembersAllEvents";
import AcceptedMembersForAnEvent from "./DownloadComponents/AcceptedMembersForAnEvent";
import TeamMembersAllEvents from "./DownloadComponents/TeamMembersAllEvents";
import TeamMembersForAnEvent from "./DownloadComponents/TeamMembersForAnEvent";

import { useSelector } from "react-redux";

const VerticalSideBarAdmin = () => {
  const [activeItem, setActiveItem] = useState("Participating Teams List");

  const handleLogout = () => {
    setConfirmModalOpen(true);
  };

  const user = useSelector((state) => state.user.currentUser);
  const role = user?.role;


  const renderPageContent = () => {
    console.log("Rendering content for:", activeItem); // Added log
    switch (activeItem) {
      case "Participating Teams List":
        return <ParticipatingTeams />;
      case "List of fee paid members" && role === "admin":
        return <ListFeePaid />;
      // case "Download accepted team members for all the events":
      //   return <AcceptedTeamMembersAllEvents />;
      // case "Download team members for all the events":
      //   return <TeamMembersAllEvents />;
      // case "Download team members for an event":
      //   return <TeamMembersForAnEvent />;
      case "Download accepted team members for an event":
        return <AcceptedMembersForAnEvent />;
      case "Make departmental coordinator":
        return <MakeDC />;
      case "Get all departmental coordinators list":
        return <AllDC />;
      case "Delete departmental coordinator":
        return <DeleteDC />;
      case "Payment not verified":
        return <MembersNotVerified />;
      default:
        return <div>Select a Page</div>;
    }
  };

  return (
    <>
      <div className="flex w-full overflow-x-hidden h-full overflow-y-hidden">
        <div className="hidden md:block md:w-[26vw] custom1000:w-[20vw] custom1840:w-[17vw] w-[20vw] h-[100vh] bg-scheduleLargeText">
          <div className="h-[128px]"></div>
          <div className="h-full relative flex flex-col gap-4 text-mineShaft w-full py-6 px-2 font-Manrope text-[16px]">
          {role === "admin" ?[
              "Participating Teams List",
              "List of fee paid members",
              // "Download accepted team members for all the events",
              // "Download team members for all the events",
              // "Download team members for an event",
              "Download accepted team members for an event",
              "Make departmental coordinator",
              "Get all departmental coordinators list",
              "Delete departmental coordinator",
              "Payment not verified",
            ]:[ "Participating Teams List",
              "Download accepted team members for an event",
            ]
           .map((item) => (
              <div
                key={item}
                className={`group w-full h-[49px] border-0 cursor-pointer rounded-[6px] flex items-center px-2 gap-3 transition-all duration-200 ${
                  activeItem === item
                    ? "bg-white text-zinc-700"
                    : "hover:text-zinc-700 hover:bg-white"
                }`}
                onClick={() => {
                  setActiveItem(item);
                  console.log("Active item set to:", item); // Added log
                }}
              >
                <h1 className="relative top-[0.7px]">{item}</h1>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-grow">{renderPageContent()}</div>
        <Toaster />
      </div>
    </>
  );
};

export default VerticalSideBarAdmin;
