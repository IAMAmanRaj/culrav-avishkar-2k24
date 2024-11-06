// FILE: CreateTeam.jsx
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import TeamOptions from "../shared/TeamOptions";
import ContentBox from "../../../assets/userDashBoard/ContentBox.png";
import useAuth from "../../../lib/useAuth.js";
import { useNavigate } from "react-router-dom";
import getUser from "../userService.js";
import { createTeam } from "../services.js";
import toast from "react-hot-toast";
import { createTeamSuccess, createTeamFailure, setLeaderId } from "../../../redux/team/teamSlice";

const CreateTeam = () => {
  const [teamName, setTeamName] = useState("");
  const [teamSize, setTeamSize] = useState(1);

  const { user, token } = getUser();
  const isAuthenticated = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    } else {
      dispatch(setLeaderId(user._id));
    }
  }, [isAuthenticated]);

  const handleTeamNameChange = (name) => {
    setTeamName(name);
  };

  const handleTeamSizeChange = (size) => {
    setTeamSize(size);
  };

  const handleSubmit = async () => {
    try {
      const res = await createTeam({ leader: user._id, teamName, teamSize, token });
      console.log("response",res);
      if (res?.success) {
        toast(`Team Created Successfully!`, {
          icon: '🛹',
          duration: 2000,
          className: "toast-blue",
        });
        console.log("teamsss",res.team.teamName);
        dispatch(createTeamSuccess(res.team.teamName)); 
      } else {
        dispatch(createTeamFailure(res?.message));
        toast.error(res?.message, { className: "toast-error" });
      }
    } catch (err) {
      dispatch(createTeamFailure('Internal Server Error'));
      console.log(err);
      toast.error('Internal Server Error', { className: "toast-error" });
    }
  };

  return (
    <div 
      className="md:w-[74vw] custom1000:w-[80vw] custom1840:w-[83vw] w-full absolute flex justify-center items-center h-full md:h-auto"
      style={{
        height: '100%',
        backgroundImage: `url(${ContentBox})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
      }} 
    >
      <div className="text-xs xs:text-sm md:text-lg rounded-md px-9 py-7 bg-scheduleLargeText w-[90%] sm:w-[67%] md:w-[60%] max-w-[640px]">
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