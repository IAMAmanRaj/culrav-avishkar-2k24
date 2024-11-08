import { data as teamData } from "../../data/Team/info.jsx";
import PersonCard from "./PersonCard.jsx";

function TeamProfile() {
  return (
    <div className="w-full h-full pt-[8%] p-[5%] flex flex-col gap-3">
      {teamData.map((team, index) => {
        return (
          <div id={`${team.teamName}`} className="w-full h-full flex flex-col ">
            <div className="w-full mb-[3%]">
              <div className="text-[1.4rem]  ml-[11%] md:ml-0 sm:text-[1.7rem] md:text-[1.4rem] lg:text-[2rem] text-customOrange font-bebas tracking-wide">
                {team.teamName}
              </div>
            </div>
            <div className="w-full h-full flex flex-col items-center md:flex-row md:flex-wrap md:justify-between gap-[2%]  lg:gap-[7%] mb-[20%] sm:mb-[10%]">
              {team.members.map((profile) => {
                return (
                  <div className="md:w-[20vw] md:h-[20vw] mb-[10%] sm:m-0 w-[70vw] h-[70vw] lg:w-[20vw] lg:h-[21vw] flex justify-center items-center">
                    <PersonCard profile={profile} />
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default TeamProfile;
