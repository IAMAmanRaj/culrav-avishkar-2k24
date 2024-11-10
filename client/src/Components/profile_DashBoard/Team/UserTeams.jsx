// FILE: UserTeams.jsx
import React, { useState } from "react";
import { Button } from "@/ShadCnComponents/ui/button";
import ScrollableDiv from "@/Components/profile_DashBoard/shared/ScrollableDiv";
import Alert from "../shared/Alert";
import getUser from "../userService";
import { deleteTeam } from "../services";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { deleteTeamSuccess } from "../../../redux/team/teamSlice";

function UserTeams({ showTeamInfo }) {
  const [openDeleteTeamModal, setOpenDeleteTeamModal] = useState(false);
  const [teamToBeDeleted, setTeamToBeDeleted] = useState({});
  const { user, token } = getUser();
  const dispatch = useDispatch();
  const { myTeams = [], joinedTeams = [] } = useSelector((state) => state.team);

  const handleDeleteTeam = async () => {
    try {
      const res = await deleteTeam({
        userId: user._id,
        teamId: teamToBeDeleted._id,
        token,
      });
      if (res?.success) {
        dispatch(deleteTeamSuccess(teamToBeDeleted.teamName));
        setOpenDeleteTeamModal(false);
        toast("Team Deleted !", {
          icon: "🚀",
          duration: 2000,
          className: "toast-blue",
        });
      } else {
        // Handle the case where the response is not successful
        const errorMessage = res.message || "An error occurred. Please try again.";
        toast.error(errorMessage, {
          icon: "❗️",
          duration: 2000,
          className: "toast-yellow",
        });
      }
    } catch (err) {
      console.log("error", err);
      const errorMessage = err.response?.data?.message || "An error occurred. Please try again.";
      toast.error(errorMessage, {
        icon: "❗️",
        duration: 2000,
        className: "toast-error",
      });
      console.log(err);
    }
  };
  function handleSelectTeam(team) {
    console.log(team);
    showTeamInfo(team);
  }

  function openDeleteModal({ e, team }) {
    e.stopPropagation();
    e.preventDefault();
    setOpenDeleteTeamModal(true);
    setTeamToBeDeleted(team);
  }

  return (
    <div className={`md:w-[50vw]  ${myTeams.length === 0 || joinedTeams.length === 0 ? "lg:w-1/2" : "lg:w-full"} h-auto flex flex-col lg:flex-row gap-10 lg:gap-5`}>
      {myTeams.length > 0 && (
        <ScrollableDiv title="My teams"
        >
          {myTeams.map((team) => {
            return (
              <div
                key={team.teamName}
                className="cursor-pointer mb-3 h-auto w-full px-5 py-4 bg-Mine_Shaft_900 rounded  md:justify-between flex items-center md:flex-row flex-col 
                 "
              >
                <div className="text-Mine_Shaft_300 md:mb-0 mb-2 text-lg font-normal font-sfText leading-tight">
                  {team.teamName}
                </div>
                <div className="flex flex-row justify-between gap-5">
                  <Button
                    className="z-5 text-Mine_Shaft_100 text-lg bg-customRed hover:bg-red-500 px-5"
                    onClick={(e) => openDeleteModal({ e, team })}
                  >
                    Delete
                  </Button>
                  <Button
                    className="z-5 text-black text-lg bg-custom_gray_100 hover:bg-gray-200 px-5"
                    onClick={() => handleSelectTeam(team)}
                  >
                    View
                  </Button>
                </div>
              </div>
            );
          })}
        </ScrollableDiv>
      )}
      {joinedTeams.length > 0 && (
        <ScrollableDiv title="Joined teams">
          {joinedTeams.map((team) => {
            return (
              <div
                key={team.teamName}
                className="cursor-pointer mb-3 h-auto w-full px-5 py-6 bg-Mine_Shaft_900 rounded justify-between items-center inline-flex 
            transition-all duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl"
              >
                <div className="text-Mine_Shaft_300 text-lg font-normal font-sfText leading-tight">
                  {team.teamName}
                </div>
                <Button
                    className="z-5 text-black text-lg bg-custom_gray_100 hover:bg-gray-200 px-5"
                    onClick={() => handleSelectTeam(team)}
                  >
                    View
                  </Button>
              </div>
            );
          })}
        </ScrollableDiv>
      )}
      {openDeleteTeamModal && (
        <Alert
          title="Delete Team"
          ButtonTitle="Delete"
          handleCancel={() => {
            setOpenDeleteTeamModal(false);
          }}
          handleProceed={handleDeleteTeam}
        >
          <div className="self-stretch text-center font-sfText font-normal">
            <div>Are you sure you want to delete this team?</div>
            <div>This action cannot be undone</div>
          </div>
        </Alert>
      )}
    </div>
  );
}

export default UserTeams;