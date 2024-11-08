import React, { useEffect, useState } from "react";
import PersonCard from "../../Components/Team/PersonCard";
import overlay1 from "../../assets/Overlay1.png";
import TeamProfile from "@/Components/Team/TeamProfiles";
import SideBar from "@/Components/Team/SideBar";

function Team() {
  const teams = [
    "SAC PRESIDENT",
    "FACULTY INCHARGE",
    "FACULTY COORDINATOR",
    "FESTIVAL SECRETARY",
    "PR TEAM",
    "WEB TEAM",
    "DESIGN & MEDIA LEADS",
    "ARTS LEADS",
    "GNOSIOMANIA LEADS",
    "DEPARTMENTAL COORDINATOR",
  ];

  const [selectedTeam, setSelectedTeam] = useState(teams[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full h-full relative z-20 flex flex-row py-16 md:py-12 bg-[#111111] overflow-hidden"
      style={{
        backgroundImage: `url(${overlay1})`,
        backgroundSize: "cover", // Ensure image covers the entire div
        backgroundPosition: "center", // Center the image
        backgroundRepeat: "no-repeat", // Prevent image repetition
        width: "100%", // Set the width to 100% of the parent
        height: "100%", // Set the height of the div
      }}
    >
      <div className="hidden md:block pt-[4%] pl-[3%] md:w-[30%] lg:w-[20%] bg-transparent">
        <SideBar
          teams={teams}
          selectedTeam={selectedTeam}
          setSelectedTeam={setSelectedTeam}
        />
      </div>
      <div className="w-full md:w-[80%]">
        <TeamProfile />
      </div>
    </div>
  );
}

export default Team;
