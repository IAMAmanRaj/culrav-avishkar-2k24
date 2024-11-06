import React, { useState } from "react";

function SideBar({ teams, selectedTeam, setSelectedTeam }) {

    return (
        <div className="px-5 py-2.5 justify-start items-center gap-[13px] inline-flex">
            <div className="w-full flex-col md:text-[2vw] lg:text-[1.5vw] justify-start items-start gap-[1vw] inline-flex">
                {teams.map((team,index) => {
                    const isSelected = selectedTeam === team;
                    return (
                        <div
                            key={team}
                            className={`${isSelected ? "text-customOrange underline" : "text-silver"} 
                                        font-normal font-bebas leading-none tracking-wide 
                                        hover:cursor-pointer relative group`}
                            onClick={() => setSelectedTeam(team)}
                        >
                            <a href={`#${team}`}>
                                {team}
                            </a>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default SideBar;
