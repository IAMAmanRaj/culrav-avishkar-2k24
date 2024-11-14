import layer2 from "@/images/avishlayer2.png";
import bullet from "@/images/bullet1.png";
import avishkareventbg from "@/images/Overlay.png";
import paint from "@/images/paint.png";
import { useEffect, useState } from "react";
import TeamRegisterModal from "../modal/TeamRegisterModal";
import {
  getAllTeams,
  splitTeamsByLeader,
} from "../../Components/profile_DashBoard/services.js";
import getUser from "../../Components/profile_DashBoard/userService.js";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import events from "@/data/Event/avishkar/events/AvishkarAllEvents";
import { useSelector } from "react-redux";

function AvishkarEvent() {
  const { EventId, Id } = useParams();
  const [decodedData, setdecodedData] = useState(null);
  const userTeams= useSelector((state) => state.team.myTeams)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [teams, setTeams] = useState([]);

  const navigate = useNavigate();

  const { token, user } = getUser();
  const role = user?.role;

  const handleModelOpen = async () => {
    if (!token) {
      toast.error("Please Login first !");
      return;
    }
    if(role==="admin"){
      toast.error("You can't register for events !", {
        duration: 2000,
        className: "toast-error",
      });
      return;
    }

    if(userTeams.length===0){

      toast.error("Create a Team, Invite members and then register !", {
        duration: 2000,
        className: "toast-error",
      });
      return;
    }

    setIsModalOpen(true);

    try {
      const res = await getAllTeams({ userId: user._id, token });
      if (res?.success) {
        const givenLeaderId = user._id;
        const totalTeams = res?.totalTeams;
        const { matchingLeaderTeams, nonMatchingLeaderTeams } =
          splitTeamsByLeader({ totalTeams, givenLeaderId });
        setTeams(matchingLeaderTeams);
      } else {
        console.log(res?.message);
        toast.error("error while getting the teams");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    console.log(EventId, Id);
    const func = () => {
      const mainEvent = events.find(event => event.id === parseInt(EventId));
      if (mainEvent) {
        const subEvent = mainEvent.events.find(subEvent => subEvent.eventId.toString() === Id);
        if (subEvent) {
          console.log("subEvent",subEvent);
          setdecodedData(subEvent);
        } else {
          navigate("/404");
        }
      } else {
        navigate("/404");
      }
    };
    func();
  }, []);


  
  const eventData = decodedData
    ? {
      eventId: decodedData.eventId,
      eventName: decodedData.eventName,
      department: "NA",
      minTeamSize: decodedData.minTeamSize,
      maxTeamSize: decodedData.maxTeamSize,
      eventCoordinators: decodedData.coordinators,
      description: decodedData.description,
      rules: decodedData.rules,
    }
    : null;


    console.log(decodedData)




  return (
    <>
      {isModalOpen && (
        <TeamRegisterModal
          teams={teams}
          eventData={eventData}
          onClose={() => {
            setIsModalOpen(false);
          }}
          themeColor="white"
          isOpen={isModalOpen}
        />
      )}
      {/* <div
        className="flex flex-col items-center pt-[10vh] justify-center min-h-screen w-full bg-[#181818]   text-white bg-fixed overflow-x-hidden"
        style={{
          backgroundImage: `url(${avishkareventbg}), url(${layer2})`,
          backgroundRepeat: "no-repeat, repeat",
          backgroundPosition: "center, top-left",
          backgroundSize: "cover, 250px auto",
        }}
      > */}
      <div className=" pt-20 relative z-20 flex overflow-x-hidden flex-col items-center justify-center bg-[#181818] text-white bg-fixed "
        style={{
          backgroundImage: `url(${avishkareventbg}), url(${layer2})`,
          backgroundRepeat: "no-repeat, repeat",
          backgroundPosition: "center, top-left",
          backgroundSize: "cover, 250px auto",
        }}
      >
        <div
          className=" flex items-center  justify-center text-center  text-white"
          style={{
            backgroundImage: `url(${paint})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "45vw",
            height: "25vw",
            margin: "0 auto",
          }}
        >
          <span className="font-bionix text-[3vw] pl-[6%]">
            {eventData?.eventName}
          </span>
        </div>

        {/* Content Wrapper */}
        <div className="flex-grow pl-[7%] mr-[5%]">
          {/* Description Section */}
          <section className="flex flex-col items-center text-center">
            <h2 className="text-[#F54E25] font-bionix text-[2.5vw] uppercase ">
              Description
            </h2>
            <p
              className="w-full text-[2.5vw] font-bebas pl-[10%] pr-[10%]"
              style={{ wordSpacing: "0.2em" }}
            >
              {eventData?.description}
            </p>
          </section>

          {/* Rules Section */}
          <section className="px-4 py-6 pl-[10vw]">
            <h2 className="text-[#F54E25] font-bionix text-[2.5vw] pr-[9vw] uppercase text-center mb-2">
              Rules
            </h2>
            <ul className="w-full mx-[5%] font-bebas space-y-4 items-start justify-center flex flex-col">
              {eventData?.rules.map((rule, index) => (
                <li
                  key={index}
                  className="flex items-start text-[2.5vw] mr-[10%]"
                  style={{ wordSpacing: "0.2em" }}
                >
                  <div
                    className="mr-4 bg-cover bg-center p-[0.8vw] mt-[1.5%] "
                    style={{
                      backgroundImage: `url(${bullet})`,
                      width: "0.5em",
                      height: "0.5em",
                    }}
                  ></div>
                  {rule}
                </li>
              ))}
            </ul>
          </section>

          {/* Register Button */}
          <div className="flex justify-center py-6 pl-[5vw]">
            <button
              onClick={handleModelOpen}
              className="bg-[#F54E25] text-[2.5vw] font-bionix hover:bg-orange-600 text-[#FFFAF0] font-bold py-2 px-6"
            >
              Register
            </button>
          </div>
        </div>

        {/* Footer Section */}
        <div className="w-full text-center relative">
          {/* Desktop Background */}
          <div
            className="absolute inset-0 w-full bg-floralWhite hidden sm:block -top-3"
            style={{
              clipPath:
                "polygon(27% 4%, 75% 0%, 100% 15%, 100% 100%, 0 100%, 0 24%)",

              /* Other styles */
            }}
          ></div>
          <div
            className="absolute inset-0 w-full bg-[#F54E25] hidden sm:block  "
            style={{
              clipPath:
                "polygon(27% 4%, 75% 0%, 100% 15%, 100% 100%, 0 100%, 0 24%)",

              /* Other styles */
            }}
          ></div>
          {/* Mobile Background */}
          <div className="absolute inset-0 w-full h-full bg-cover bg-[#181818] bg-no-repeat sm:hidden border-t-[5px] border-white"></div>

          {/* Content overlay */}
          <div className="relative z-10 py-6">
            <h2 className="uppercase text-[3vw] font-bionix mb-4">
              Coordinators
            </h2>
            <div className="flex justify-around font-bionix text-[2.5vw]">
              {eventData?.eventCoordinators.map((coo, idx) => (
                <div>{coo.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AvishkarEvent;
