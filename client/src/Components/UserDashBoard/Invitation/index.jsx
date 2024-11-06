import InvitationCard from "@/Components/UserDashboard/Invitation/InviteCard"
import ScrollableDiv from "@/Components/UserDashboard/shared/ScrollableDiv"
import ContentBox from "@/assets/userDashBoard/ContentBox.png"
import { isValidElement, useEffect, useState } from "react"
import useAuth from "../../../lib/useAuth.js"
import { useNavigate } from "react-router-dom"
import { getInvitations } from "../services.js"
import getUser from "../userService.js"
import toast from "react-hot-toast"

function Invitations() {

    const [allTeamInvites, setAllTeamInvites] = useState([])
    const isAuthenticated = useAuth()
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const {user, token} = getUser()

    useEffect(() => {
        if(!isAuthenticated){
            navigate("/")
        }
        
    }, [isAuthenticated])

    useEffect(() => {
        const fetchData = async() => {
            try{
                setLoading(true)
                const res = await getInvitations({userId : user._id, token})
                if(res?.success){
                    setAllTeamInvites(res?.teams)
                    setLoading(false)
                      toast("Invitations Fetched successfully!", {
                        icon: '🚀',
                        duration: 2000,
                        className: "toast-blue"
                      });

                }else{
                    toast.error(res?.message, {
                        style: {
                          marginTop: "50px",
                        },
                      })
                }
            }catch(err){
                setLoading(true)
                toast.error("Something went wrong. Please try again.", { className: "toast-error" });
                console.log(err)
            }
        }
        fetchData()
    } , [token])

    

    if(!loading){
        console.log(`all teams : ${allTeamInvites}`)
    }


    return (
        <div className="overflow-y-scroll md:w-[74vw] bg-white custom1000:w-[80vw] custom1840:w-[83vw] w-full absolute top-[92px] flex pt-20 p-5 md:p-10  h-full md:h-auto
            
                "
            style={{
                height: 'calc(100vh - 92px)',
                backgroundImage: `url(${ContentBox})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>

            {allTeamInvites.length > 0 ? <div className=" w-full flex gap-4  text-xl flex-col 
            ">
                <div className="font-sfText leading-tight text-2xl mb-5 font-bold">Recieved Invitations</div>
                <div className="overflow-y-scroll flex flex-col gap-5 
                 [&::-webkit-scrollbar]:w-1
                [&::-webkit-scrollbar-thumb]:rounded-full 
                [&::-webkit-scrollbar-thumb]:bg-dark_secondary
                max-h-[600px] md:max-h-[450px]">
                    {allTeamInvites.map((invite) => {
                        return (
                            <InvitationCard invite={invite} setAllTeamInvites = {setAllTeamInvites} allInviteData = {allTeamInvites}/>
                        )
                    })}
                </div>
            </div> :
                <div className="w-full h-full text-center font-normal font-sfText leading-tight text-lg">
                    No Invitation
                </div>}

        </div>

    )
}

export default Invitations