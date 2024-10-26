import React, { useState } from 'react'
import leftArrow from "../../../assets/leftArrow.svg"
import ScrollableDiv from "@/Components/UserDashboard/shared/ScrollableDiv"
import { Button } from "@/ShadCnComponents/ui/button"
import { useNavigate } from "react-router-dom"
import Alert from "@/Components/UserDashboard/shared/Alert"
import deletUserImg from "../../../assets/userDashBoard/deleteUser.svg"

function TeamInfo({ team, handleShowAllTeams }) {
    const navigate = useNavigate();
    const [openRemoveMemberModal, setOpenRemoveMemberModal] = useState(false);
    const [removeMemberInfo, setRemoveMemebrInfo] = useState(null)

    function handleRemoveMember() {
    }



    function handleBack() {
        handleShowAllTeams();
    }

    function openRemoveModal({ e, member }) {
        e.stopPropagation();
        e.preventDefault();
        console.log(member)
        setOpenRemoveMemberModal(true);
        setRemoveMemebrInfo(member)
    }


    const isLeader = true;

    return (
        <div className="w-full h-full  bg-dark_secondary p-3 md:p-5 flex flex-col">
            <div onClick={handleBack} className="flex flex-row items-center gap-2 mb-10 w-auto
            hover:cursor-pointer  ">
                <div>
                    <img src={leftArrow} />
                </div>
                <div className="text-customOrange text-lg">Back</div>
            </div>
            <div className="w-full h-full flex flex-col md:px-4">
                <div className="text-3xl text-white font-medium font-sfText leading-tight mb-5">{team.name}</div>
                <div className="flex flex-col md:flex-row gap-10 mt-5">
                    <div className="w-full h-auto flex flex-col gap-5">
                        <input type="text" placeholder="Team Member's email id" className="bg-Mine_Shaft_900 text-Mine_Shaft_300 px-5 py-3 rounded-md font-sfText text-lg md:text-md" />
                        <div>
                            <div className="bg-customOrange hover:cursor-pointer text-white font-normal font-sfText rounded-md hover:bg-customRed text-lg md:text-md text-center p-3">
                                Add team member </div>
                        </div>
                    </div>
                    <div className="w-full h-auto flex flex-col gap-4 mt-2 text-lg text-white">
                        <div>Team size: {team.size}</div>
                        <div>Accepted Members: {team.acceptedMembers}</div>
                        <div>Pending Invites: {team.pendingInvites}</div>
                    </div>
                </div>
                <div className="mt-16 flex flex-col md:flex-row gap-16 md:gap-5">
                    <ScrollableDiv title="Participated Events" titleStyle="ml-3 md:ml-5 text-xl mb-7 text-white">
                        {team.participatedEvents.map((event) => {
                            return (
                                <div className="mb-3 h-auto w-full p-2 md:px-5 md:py-4 bg-Mine_Shaft_900 rounded justify-between items-center inline-flex">
                                    <div className="text-Mine_Shaft_300 text-md md:text-lg font-normal font-sfText leading-tight">{team.name}</div>
                                </div>
                            )
                        })}
                    </ScrollableDiv>
                    <ScrollableDiv title="Team members" titleStyle="ml-3 md:ml-5 text-xl mb-7 text-white">
                        {team.members.map((member) => {
                            return (
                                <div className="mb-3 h-auto w-full px-2 py-2 md:px-5 md:py-4 bg-Mine_Shaft_900 rounded justify-between items-center inline-flex">
                                    <div className="flex flex-col gap-1">
                                        <div class="text-Mine_Shaft_100 text-md md:text-lg font-normal font-sfText leading-tight">{member.name}</div>
                                        {/* <div class="text-Mine_Shaft_300 text-lg font-normal font-sfText leading-tight">{member.email}</div> */}
                                    </div>
                                    {isLeader && <Button className="text-Mine_Shaft_100 text-md md:text-lg bg-customRed hover:bg-red-500 px-5" onClick={(e) => { openRemoveModal({ e, member }) }}>Remove</Button>}
                                </div>
                            )
                        })}
                    </ScrollableDiv>
                </div>
            </div>
            {openRemoveMemberModal && <Alert img={deletUserImg} title={`Remove ${removeMemberInfo.name}`} ButtonTitle="Delete" handleCancel={() => { setOpenRemoveMemberModal(false) }}
                handleProceed={handleRemoveMember}>
                <div className="self-stretch text-center font-sfText font-normal">
                    <div className='w-full '>Are you sure you want to remove {removeMemberInfo.name}?</div>
                    <div>This action cannot be undone</div>
                </div>
            </Alert>
            }
        </div>
    )
}

export default TeamInfo