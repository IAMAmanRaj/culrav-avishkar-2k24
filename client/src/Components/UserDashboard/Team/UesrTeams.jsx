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
    const {user, token} = getUser()

    const navigate = useNavigate();

    const handleDeleteTeam = async() => {
        try{
            const res = await deleteTeam({userId : user._id, teamId : teamToBeDeleted._id, token})
            if(res?.success){
                const myTeams = teamData.myTeams
                const newRemainingMyTeams = myTeams.filter((tm) => JSON.stringify(tm._id) != JSON.stringify(teamToBeDeleted._id))
                setMyTeams(newRemainingMyTeams)
                setOpenDeleteTeamModal(false)
                toast.success(res?.message);
            }else{
                toast.error(res?.message)
            }
        }catch(err){
            console.log(err)
        }
    }
    function handleSelectTeam(team) {
        console.log(team)
        showTeamInfo(team);
    }

    function openDeleteModal({e, team}) {
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
        <div className="md:w-[50vw]  lg:w-full  h-full flex flex-col lg:flex-row gap-10 lg:gap-5 ">

            {createdTeams.length > 0 &&
                <ScrollableDiv title="My teams">
                    {createdTeams.map((team) => {
                        return (
                            <div onClick={() => handleSelectTeam(team)} className="cursor-pointer mb-3 h-auto w-full px-5 py-4 bg-Mine_Shaft_900 rounded justify-between items-center inline-flex
            transition-all duration-300 ease-in-out transform hover:scale-95 hover:shadow-xl
                            ">
                                <div className="text-Mine_Shaft_300 text-lg font-normal font-sfText leading-tight">{team.teamName}</div>
                                <Button className="z-5 text-Mine_Shaft_100 text-lg bg-customRed hover:bg-red-500 px-5" onClick={(e) => openDeleteModal({e, team})}>Delete</Button>
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