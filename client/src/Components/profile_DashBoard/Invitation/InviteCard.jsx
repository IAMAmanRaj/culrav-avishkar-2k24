import { Button } from "@/ShadCnComponents/ui/button";
import getUser from "../userService.js";
import { acceptInvite, rejectInvite } from "../services.js";
import toast from "react-hot-toast";


function InvitationCard({ invite, setAllTeamInvites, allInviteData }) {
    // console.log(invite?.teamName)

    const {user, token} = getUser()

    const handleAccept = async() => {
        try{
            const res = await acceptInvite({userId : user._id, teamId: invite._id, token})
            if(res?.success){
                console.log("Invite Accepted")
                toast.success(`Congratulations! Now you are part of team ${invite.teamName}`, {
                    style: {
                      marginTop: "50px",
                    },
                  })

                const remainingInvites = allInviteData.filter((team) => team._id != invite._id)
                setAllTeamInvites(remainingInvites)
            }else{
                console.log(res?.msg)
            }
        }catch(err){
            console.log(err)
        }
    }

    const handleReject = async() => {
        try{
            const res = await rejectInvite({userId : user._id, teamId: invite._id, token})
            if(res?.success){
                console.log("Invite Rejected")
                toast.success("Invite rejected!", {
                    style: {
                      marginTop: "50px",
                    },
                  })
                const remainingInvites = allInviteData.filter((team) => team._id != invite._id)
                setAllTeamInvites(remainingInvites)
            }else{
                console.log(res?.msg)
            }
        }catch(err){
            console.log(err)
        }
    }

    return (<div className="px-6 py-3 bg-dark_secondary rounded-lg  sm:w-[80%]  md:w-full lg:w-[50%] flex sm:justify-between sm:items-center  flex-col sm:flex-row p-2">
        <div className="sm:text-Mine_Shaft_300 text-floral_white p-2 sm:mb-0 mb-4 sm:p-0 text-xl sm:text-lg font-medium  font-sfText leading-tight ">{invite?.teamName}</div>
        <div className="sm:flex flex-row hidden sm:justify-between mb-2 gap-8 sm:gap-5 sm:mb-0">
            <Button className="px-10 text-base text-flamingo_50 bg-customGreen hover:bg-green-900  font-medium font-sfText leading-tight" onClick = {handleAccept}>Accept</Button>
            <Button className="px-10 text-base text-flamingo_50 bg-customRed hover:bg-red-800  font-medium font-sfText leading-tight" onClick = {handleReject}>Reject</Button>
        </div>
        <div className="flex flex-row-reverse sm:hidden sm:justify-between mb-1 gap-8 sm:gap-5 sm:mb-0">
            <Button className="px-10 text-base text-flamingo_50 bg-customRed hover:bg-red-800  font-medium font-sfText leading-tight" onClick = {handleAccept}>Reject</Button>
            <Button className="px-10 text-base text-flamingo_50 bg-customGreen hover:bg-green-900  font-medium font-sfText leading-tight" onClick = {handleReject}>Accept</Button>
        </div>
    </div>)
}

export default InvitationCard;