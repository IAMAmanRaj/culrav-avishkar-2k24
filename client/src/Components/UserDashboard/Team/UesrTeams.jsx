import React, { useState } from 'react'
import { Button } from "@/ShadCnComponents/ui/button"
import ScrollableDiv from "@/Components/UserDashboard/shared/ScrollableDiv"
import { useNavigate } from "react-router-dom"
import Alert from '../shared/Alert'
import getUser from '../userService'
import { deleteTeam } from '../services'
import toast from 'react-hot-toast'

function UserTeams({ teamData, showTeamInfo, setMyTeams }) {

    const [openDeleteTeamModal, setOpenDeleteTeamModal] = useState(false);
    const [teamToBeDeleted, setTeamToBeDeleted] = useState({})
    const { user, token } = getUser()

    const navigate = useNavigate();

    const handleDeleteTeam = async () => {
        try {
            const res = await deleteTeam({ userId: user._id, teamId: teamToBeDeleted._id, token })
            if (res?.success) {
                const myTeams = teamData.myTeams
                const newRemainingMyTeams = myTeams.filter((tm) => JSON.stringify(tm._id) != JSON.stringify(teamToBeDeleted._id))
                setMyTeams(newRemainingMyTeams)
                setOpenDeleteTeamModal(false)
                toast.success(res?.message, {
                    style: {
                        marginTop: "50px",
                    },
                });
            } else {
                toast.error(res?.message, {
                    style: {
                        marginTop: "50px",
                    },
                })
            }
        } catch (err) {
            console.log(err)
        }
    }
    function handleSelectTeam(team) {
        console.log(team)
        showTeamInfo(team);
    }

    function openDeleteModal({ e, team }) {
        e.stopPropagation();
        e.preventDefault();
        setOpenDeleteTeamModal(true);
        setTeamToBeDeleted(team)
    }

    const userEmail = user.email
    // const createdTeams = teamData.filter(team => team.leader.email === userEmail)
    // const joinedTeams = teamData.filter(team => !team.leader.email !== userEmail)
    const createdTeams = teamData.myTeams
    const joinedTeams = teamData.joinedTeams

    return (
        <div className={`md:w-[50vw] ${createdTeams.length === 0 || joinedTeams.length === 0 ? "lg:w-1/2" : "lg:w-full "}  h-full flex flex-col lg:flex-row gap-10 lg:gap-5`}>

            {createdTeams.length > 0 &&
                <ScrollableDiv title="My teams" className="w-[30vw]">
                    {createdTeams.map((team) => {
                        return (
                            <div className="cursor-pointer px-5 mb-3 h-auto w-fullpx-5 py-4 bg-Mine_Shaft_900 rounded justify-between md:items-center flex flex-col gap-3 md:gap-0 md:flex-row
                                    shadow-xl
                            ">
                                <div className="text-Mine_Shaft_300 text-lg font-normal font-sfText leading-tight">{team.teamName}</div>
                                <div className="flex flex-row justify-between gap-5">
                                    <Button className="z-5 text-Mine_Shaft_100 text-lg bg-customRed hover:bg-red-500 px-5" onClick={(e) => openDeleteModal({ e, team })}>Delete</Button>
                                    <Button className="z-5 text-black text-lg bg-custom_gray_100 hover:bg-gray-200 px-5" onClick={() => handleSelectTeam(team)}>View</Button>
                                </div>
                            </div>
                        )
                    })}
                </ScrollableDiv>
            }
            {joinedTeams.length > 0 &&
                <ScrollableDiv title="Joined teams">
                    {joinedTeams.map((team) => {
                        return (
                            <div onClick={() => { handleSelectTeam(team) }} className="cursor-pointer mb-3 h-auto w-full px-5 py-6 bg-Mine_Shaft_900 rounded justify-between items-center inline-flex 
            transition-all duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl">
                                <div className="text-Mine_Shaft_300 text-lg font-normal font-sfText leading-tight">{team.teamName}</div>
                            </div>
                        )
                    })}
                </ScrollableDiv>
            }
            {openDeleteTeamModal && <Alert title="Delete Team" ButtonTitle="Delete" handleCancel={() => { setOpenDeleteTeamModal(false) }}
                handleProceed={handleDeleteTeam}>
                <div className="self-stretch text-center font-sfText font-normal">
                    <div>Are you sure you want to delete this team?</div>
                    <div>This action cannot be undone</div>
                </div>
            </Alert>
            }
        </div >
    )
}

export default UserTeams;