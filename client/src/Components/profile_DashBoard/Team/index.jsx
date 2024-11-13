import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UserTeams from "./UserTeams";
import TeamInfo from "./TeamInfo";
import getUser from "../userService.js";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../lib/useAuth.js";
import { getAllTeams, splitTeamsByLeader } from "../services.js";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { fetchTeamsSuccess, fetchTeamsFailure } from "../../../redux/team/teamSlice";

function Team() {
  const { user, token } = getUser();
  const navigate = useNavigate();
  const isAuthenticated = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllTeams({ userId: user._id, token });
        if (res?.success) {
          const givenLeaderId = user._id;
          const totalTeams = res?.totalTeams;
          const { matchingLeaderTeams, nonMatchingLeaderTeams } =
            splitTeamsByLeader({ totalTeams, givenLeaderId });
          dispatch(fetchTeamsSuccess({ myTeams: matchingLeaderTeams, joinedTeams: nonMatchingLeaderTeams }));
          toast("Teams Fetched successfully!", {
            icon: "🚀",
            duration: 2000,
            className: "toast-blue",
          });
        } else {
          console.log(res?.message);
          toast.error(res?.message, {
            style: {
              marginTop: "50px",
            },
          });
          dispatch(fetchTeamsFailure(res?.message));
        }
      } catch (err) {
        console.log(err);
        dispatch(fetchTeamsFailure(err.message));
      }
    };
    fetchData();
  }, [token]);

  const [showAllTeams, setShowAllTeams] = useState(true);
  const [teamData, setTeamData] = useState({});

  function showTeamInfo(team) {
    setShowAllTeams(false);
    setTeamData(team);
  }

  function handleShowAllTeams() {
    setShowAllTeams(true);
    setTeamData({});
  }

  return (
    <>
      {showAllTeams ? (
        <div className=" md:p-0 -mt-4 md:mt-0 pb-10 h-screen overflow-y-scroll md:overflow-hidden md:h-auto px-3 md:w-[74vw] 
       bg-[#202020]/100  custom1000:w-[80vw] custom1840:w-[83vw] w-full absolute top-[60px] flex 
       justify-center items-center ">
          <div className="md:px-9 md:h-screen-minus-92 h-auto md:py-7 p-4   bg-dark_secondary grid  border-[#202020]/100 border-2 w-full ">
            <div className=" h-[90%] mt-56 xs:mt-72 sm:mt-36 w-full">
              <UserTeams showTeamInfo={showTeamInfo} />
            </div>
          </div>
          <Toaster/>
        </div>
      ) : (
        <div className="h-auto overflow-x-hidden md:p-0 pt-20 pb-10  px-3 md:w-[74vw] bg-[#202020]/100  custom1000:w-[80vw] custom1840:w-[83vw] w-full absolute top-[60px] 
flex justify-center items-center
 ">
          <div className="overflow-y-scroll md:h-screen-minus-92 h-auto bg-dark_secondary grid  border-[#202020]/100 border-2 w-full
                       [&::-webkit-scrollbar]:w-1
                 [&::-webkit-scrollbar-thumb]:rounded-full
                 [&::-webkit-scrollbar-thumb]:bg-Mine_Shaft_100
                 custom-scrollbar">
            <TeamInfo team={teamData} handleShowAllTeams={handleShowAllTeams} />
          </div>
          <Toaster/>
        </div>
      )}
    </>
  );
}

export default Team;