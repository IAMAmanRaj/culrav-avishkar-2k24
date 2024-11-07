import React, { useState } from "react";
import leftArrow from "../../../assets/leftArrow.svg";
import ScrollableDiv from "@/Components/profile_DashBoard/shared/ScrollableDiv";
import { Button } from "@/ShadCnComponents/ui/button";
import { useNavigate } from "react-router-dom";
import Alert from "@/Components/profile_DashBoard/shared/Alert";
import deletUserImg from "../../../assets/userDashBoard/deleteUser.svg";
import getUser from "../userService";
import { kickMember, sendInvitation } from "../services.js";
import toast from "react-hot-toast";

function TeamInfo({ team, handleShowAllTeams }) {
  const { user, token } = getUser();
  const [openRemoveMemberModal, setOpenRemoveMemberModal] = useState(false);
  const [removeMemberInfo, setRemoveMemebrInfo] = useState(null);

  const [email, setEmail] = useState("");

  const handleRemoveMember = async () => {
    try {
      const res = await kickMember({
        leaderId: user._id,
        userTobeKickedId: removeMemberInfo._id,
        teamId: team._id,
        token,
      });
      if (res?.success) {
        toast.success(res?.message, {
          style: {
            marginTop: "50px",
          },
        });
        setOpenRemoveMemberModal(false);
      } else {
        toast.error(
          res?.message,
          { className: "toast-error" }
        );

      }
    } catch (err) {
      toast.error(
        err?.message,
        { className: "toast-error" }
      );
    }
  };

  function handleBack() {
    handleShowAllTeams();
  }

  function openRemoveModal({ e, member }) {
    e.stopPropagation();
    e.preventDefault();
    console.log(member);
    setOpenRemoveMemberModal(true);
    setRemoveMemebrInfo(member);
  }

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleInvite = async () => {
    try {
      const res = await sendInvitation({
        leaderId: user._id,
        sendToEmail: email,
        teamName: team.teamName,
        token,
      });
      if (res?.success) {
        toast(res?.message, {
          icon: '📬',
          duration: 2000,
          className: "toast-blue",
        });
        setEmail("");
      } else {
        toast(res?.message, {
          icon: "🚨",
          duration: 2000,
          className: "toast-yellow",
        });
        setEmail("");
      }
    } catch (err) {
      console.log(err);
    }
  };
  // console.log("Avinash")
  var isLeader = false;

  if (team?.leader === user._id) {
    isLeader = true;
  }
  return (
    <div className="w-full h-full  bg-dark_secondary p-3 md:p-5 flex flex-col">
      <div
        onClick={handleBack}
        className="flex flex-row items-center gap-2 mb-10 w-auto
            hover:cursor-pointer  "
      >
        <div>
          <img src={leftArrow} />
        </div>
        <div className="text-customOrange text-lg">Back</div>
      </div>
      <div className="w-full h-full flex flex-col md:px-4">
        <div className="text-3xl text-white font-medium font-sfText leading-tight mb-5">
          {team?.teamName}
        </div>
        <div className="flex flex-col md:flex-row gap-10 mt-5">
          {isLeader && (
            <div className="w-full h-auto flex flex-col gap-5">
              <input
                type="email"
                placeholder="Team Member's email id"
                className="bg-Mine_Shaft_900 text-Mine_Shaft_300 px-5 py-3 rounded-md font-sfText text-lg md:text-md"
                value={email}
                onChange={handleInputChange}
              />
              <div>
                <div
                  className="bg-customOrange hover:cursor-pointer text-white font-normal font-sfText rounded-md hover:bg-customRed text-lg md:text-md text-center p-3"
                  onClick={handleInvite}
                >
                  Send Invitation{" "}
                </div>
              </div>
            </div>
          )}
          {/* {!isLeader && <div className="w-full h-auto flex flex-col gap-5">
                        <div>
                            <div className="bg-customOrange hover:cursor-pointer text-white font-normal font-sfText rounded-md hover:bg-customRed text-lg md:text-md text-center p-3">
                                Leave Team </div>
                        </div>
                    </div>} */}
          <div className="w-full h-auto flex flex-col gap-4 mt-2 text-lg text-white">
            <div>Team size: {team?.size}</div>
            <div>Accepted Members: {team?.acceptedMembers.length}</div>
            <div>Pending Invites: {team?.pendingMembers.length}</div>
          </div>
        </div>
        <div className="mt-16 flex flex-col md:flex-row gap-16 md:gap-5">
          <ScrollableDiv
            title="Participated Events"
            titleStyle="ml-3 md:ml-5 text-xl mb-7 text-white"
          >
            {team?.registeredEvents?.map((event) => {
              return (
                <div className="mb-3 h-auto w-full p-2 md:px-5 md:py-4 bg-Mine_Shaft_900 rounded justify-between items-center inline-flex">
                  <div className="text-Mine_Shaft_300 text-md md:text-lg font-normal font-sfText leading-tight">
                    {event?.eventName}
                  </div>
                </div>
              );
            })}
          </ScrollableDiv>
          <ScrollableDiv
            title="Team members"
            titleStyle="ml-3 md:ml-5 text-xl mb-7 text-white"
          >
            {team?.acceptedMembers?.map((member) => {
              return (
                <div className="mb-3 h-auto w-full px-2 py-2 md:px-5 md:py-4 bg-Mine_Shaft_900 rounded justify-between items-center inline-flex">
                  <div className="flex flex-col gap-1">
                    <div class="text-Mine_Shaft_100 text-md md:text-lg font-normal font-sfText leading-tight">
                      {member?.name}
                    </div>
                    <div class="text-Mine_Shaft_300 text-lg font-normal font-sfText leading-tight">
                      {member?.userName}
                    </div>
                  </div>
                  {isLeader && member._id != user._id && (
                    <Button
                      className="text-Mine_Shaft_100 text-md md:text-lg bg-customRed hover:bg-red-500 px-5"
                      onClick={(e) => {
                        openRemoveModal({ e, member });
                      }}
                    >
                      Kick
                    </Button>
                  )}
                </div>
              );
            })}
          </ScrollableDiv>
        </div>
      </div>
      {openRemoveMemberModal && (
        <Alert
          img={deletUserImg}
          title={`Remove ${removeMemberInfo.name}`}
          ButtonTitle="Delete"
          handleCancel={() => {
            setOpenRemoveMemberModal(false);
          }}
          handleProceed={handleRemoveMember}
        >
          <div className="self-stretch text-center font-sfText font-normal">
            <div className="w-full ">
              Are you sure you want to remove {removeMemberInfo.name}?
            </div>
            <div>This action cannot be undone</div>
          </div>
        </Alert>
      )}
    </div>
  );
}

export default TeamInfo;
