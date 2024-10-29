import Axios from "./axiosService"

const createTeam = async({leader, teamName, teamSize, token}) => {
    try{
        const response = await Axios.post(`/team/v1/createTeam`, 
            {leader, teamName, size : teamSize},
            {headers:{Authorization: `Bearer ${token}`}}
        )
        
        return response?.data
    }catch(err){
        console.log(err)
        return err?.response?.data
    }
}

const getInvitations = async({userId, token}) => {
    try{
        const response = await Axios.get(`/team/v1/getAllInvites/${userId}`,
            {headers:{Authorization: `Bearer ${token}`}}
        )

        return response?.data
    }catch(err){
        console.log(err)
        return err?.response?.data
    }
}

const getAllTeams = async({userId, token}) => {
    try{
        const response = await Axios.get(`/team/v1/participatingTeamsOfAUser/${userId}`,
            {headers:{Authorization: `Bearer ${token}`}}
        )

        return response?.data
    }catch(err){
        console.log(err)
        return err?.response?.data
    }

}

const splitTeamsByLeader = ({totalTeams, givenLeaderId}) => {
    const matchingLeaderTeams = totalTeams.filter(team => team.leader === givenLeaderId);

    const nonMatchingLeaderTeams = totalTeams.filter(team => team.leader !== givenLeaderId);

    return {
        matchingLeaderTeams,
        nonMatchingLeaderTeams
    };
}

const updateResume = async({email, resumeLink, token}) => {
    try{
        const response = await Axios.post(`/team/v1/updateResume`,
            {email, resumeLink},
            {headers:{Authorization: `Bearer ${token}`}}
        )

        return response?.data
    }catch(err){
        console.log(err)
        return err?.response?.data
    }
}

const acceptInvite = async({userId, teamId, token}) => {
    try{
        const response = await Axios.post(`/team/v1/acceptInvite`,
            {userId, teamId},
            {headers:{Authorization: `Bearer ${token}`}}
        )

        return response?.data
    }catch(err){
        console.log(err)
        return err?.response?.data
    }
}

const rejectInvite = async({userId, teamId, token}) => {
    try{
        const response = await Axios.post(`/team/v1/rejectInvite`,
            {userId, teamId},
            {headers:{Authorization: `Bearer ${token}`}}
        )

        return response?.data
    }catch(err){
        console.log(err)
        return err?.response?.data
    }

}

const sendInvitation = async({teamName, leaderId, sendToEmail, token}) => {
    try{
        const response = await Axios.post(`/team/v1/sendTeamInvite`,
            {teamName, leaderId, sendToEmail},
            {headers:{Authorization: `Bearer ${token}`}}
        )
        return response?.data
    }catch(err){
        console.log(err)
        return err?.response?.data
    }
}


export {createTeam, 
    getInvitations, 
    getAllTeams, 
    splitTeamsByLeader, 
    updateResume, 
    acceptInvite,
    rejectInvite,
    sendInvitation
}

