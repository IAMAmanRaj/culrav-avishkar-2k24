import { useEffect, useState } from "react";
import TeamOptions from "../shared/TeamOptions";
import ContentBox from "../../../assets/userDashBoard/ContentBox.png";
import useAuth from "../../../lib/useAuth.js"
import { useNavigate } from "react-router-dom";
import getUser from "../userService.js";
import { createTeam } from "../services.js";
import toast from "react-hot-toast";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState(1);

  const {user, token} = getUser()
  const isAuthenticated = useAuth()
  const navigate = useNavigate()

  useEffect(() =>{
    if(!isAuthenticated){
      navigate("/")
    }
  }, [isAuthenticated])
  
  const handleTeamNameChange = (name) => {
    setTeamName(name);
  };

  const handleTeamSizeChange = (size) => {
    setTeamSize(size);
  };

  const handleSubmit = async() => {
    try{
     const res =  await createTeam({leader : user._id, teamName , teamSize : teamSize, token})
     if(res?.success){
      console.log("team created!")
      toast.success(`team ${teamName} created successfully!`, {
        style: {
          marginTop: "50px",
        },
      })
     }else{
      toast.error(res?.message, {
        style: {
          marginTop: "50px",
        },
      })
     }
    }catch(err){
      console.log(err)
      toast.error("internal Server Error", {
        style: {
          marginTop: "50px",
        },
      })
    }
  }

  return (
    <div className="md:w-[74vw] custom1000:w-[80vw] custom1840:w-[83vw] bg-[url('/ContentBox.png')] w-full absolute top-[92px] flex justify-center items-center h-full md:h-auto"
    style={{
      height: 'calc(100vh - 92px)',
      backgroundImage: `url(${ContentBox})`,
      backgroundSize: 'cover', 
      backgroundRepeat: 'no-repeat', 
    }} 
    >
      <div className="rounded-md px-9 py-7 bg-scheduleLargeText w-[90%] max-w-[640px]">
        <div className="w-full h-[90px] md:h-[120px] flex justify-center">
          <h1 className="font-bionix text-[30px] md:text-5xl text-white">Create Team</h1>
        </div>
        <TeamOptions 
          teamName={teamName} 
          onTeamNameChange={handleTeamNameChange} 
          teamSize={teamSize} 
          onTeamSizeChange={handleTeamSizeChange} 
        />
        
        <div className="mt-8 flex items-center justify-center w-full">
          <button className="text-[30px] font-bebas flex items-center justify-center text-white bg-scheduleOrange h-[50px] w-[215px] py-[8px] px-[29px]" onClick={handleSubmit}>
            CREATE
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateTeam;
