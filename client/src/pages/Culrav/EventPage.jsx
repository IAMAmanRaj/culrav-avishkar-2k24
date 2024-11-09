import bullet from "@/images/bullet1.png";
import layer1 from "@/images/Layer1.png";
import paint from "@/images/paint.png";
import wall from "@/images/walls1.png";
import { useEffect, useState } from "react";
import TeamRegisterModal from "../modal/TeamRegisterModal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchTeamsSuccess,
  fetchTeamsFailure,
} from "../../redux/team/teamSlice";
import {
  getAllTeams,
  splitTeamsByLeader,
  excludeAlreadyRegisteredTeams,
} from "../../Components/profile_DashBoard/services.js";
import useAuth from "../../lib/useAuth.js";
import getUser from "../../Components/profile_DashBoard/userService.js";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import events from "@/data/Event/culrav/events/culravData";

function CulravEvent() {
  const { EventId, Id } = useParams();
  const [decodedData, setdecodedData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const func = () => {
      const mainEvent = events.find(event => event.id === parseInt(EventId));
      if (mainEvent) {
        const subEvent = mainEvent.events.find(subEvent => subEvent.eventId.toString() === Id);
        if (subEvent) {
          setdecodedData(subEvent);
        } else {
          navigate("/404");
        }
      } else {
        navigate("/404");
      }
    };
    func();
  }, [EventId, Id, navigate]);

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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const { token, user } = getUser();
  const [remainingTeams, setRemainingTeams] = useState([]);

  const handleModelOpen = async () => {
    if (!token) {
      toast.error("Please Login First !");
      return;
    }

    setIsModalOpen(true);

    try {
      const res = await getAllTeams({ userId: user._id, token });
      if (res?.success) {
        const givenLeaderId = user._id;
        const totalTeams = res?.totalTeams;
        const { matchingLeaderTeams, nonMatchingLeaderTeams } = splitTeamsByLeader({ totalTeams, givenLeaderId });

        console.log("matchingLeaderTeams", matchingLeaderTeams);
        setRemainingTeams(
          excludeAlreadyRegisteredTeams({
            matchingLeaderTeams,
            eventID: eventData.eventId,
          })
        );

        console.log("these are remaining teams", remainingTeams);
        dispatch(
          fetchTeamsSuccess({
            myTeams: matchingLeaderTeams,
            joinedTeams: nonMatchingLeaderTeams,
          })
        );
      } else {
        console.log(res?.message);
        toast.error("Error while getting the teams");
        dispatch(fetchTeamsFailure(res?.message));
      }
    } catch (err) {
      console.log(err);
      dispatch(fetchTeamsFailure(err.message));
    }
  };

  if (!decodedData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isModalOpen && (
        <TeamRegisterModal
          teams={remainingTeams}
          eventData={eventData}
          onClose={() => setIsModalOpen(false)}
          themeColor="black"
          isOpen={isModalOpen}
        />
      )}
      <div className=" relative z-20 flex overflow-x-hidden flex-col items-center justify-center bg-floralWhite "
        style={{
          backgroundImage: `url(${wall})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "top-left",
          backgroundSize: "contain",
        }}>

        {/* Layer Background Wrapper for RANGSAAZI and Description */}
        <div
          className="relative w-full mt-10 flex flex-col items-center justify-center text-center m-auto "
          style={{
            backgroundImage: `url(${layer1})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center ",
            padding: "4rem",
          }}
        >
          {/* RANGSAAZI Section */}
          <div
            className="flex items-center justify-center w-full text-[#FFFAF0] "
            style={{
              backgroundImage: `url(${paint})`,
              backgroundSize: "100%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center ",
              
              margin: "0 auto",
            }}
          >
            <span className="font-bionix text-[3.5vw] sm:text-[3vw] pl-[6%]">
              {eventData.eventName}
            </span>
          </div>

          {/* Description Section */}
          <section className="relative items-center text-center pb-10 pl-[4vw] sm:pb-0 w-full ">
            <h2 className="text-[#F54E25] font-bionix text-[3vw] sm:text-[2.5vw] uppercase mb-1">
              Description
            </h2>
            <p
              className="text-[2.5vw] sm:text-[2vw] p-[0.8vw] text-[#181818] font-bebas"
              style={{ wordSpacing: "0.2em" }}
            >
              {eventData.description}
            </p>
          </section>
        </div>

        {/* Rules Section */}
        <section className="pl-[18vw] -mt-[10vh] sm:mt-0 z-10">
          <h2 className="text-[#F54E25] font-bionix text-[3vw] sm:text-[2.5vw] pr-[15vw] uppercase text-center ">
            Rules
          </h2>
          <ul className="w-full mx-[5%] text-[#181818] font-bebas space-y-4 pr-[10%] items-start justify-center flex flex-col">
            {eventData.rules.map((rule, index) => (
              <li
                key={index}
                className="flex items-start w-[85%] text-[2.5vw] sm:text-[2vw] mt-[1.5%]"
                style={{ wordSpacing: "0.15em" }}
              >
                <div
                  className="mr-4 bg-cover bg-center p-[0.9vw] sm:p-[0.8vw] mt-[1.5%]"
                  style={{
                    backgroundImage: `url(${bullet})`,
                    width: "0.5em",
                    height: "0.5em",
                  }}
                ></div>
                {rule.r}
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

        {/* Footer Section */}
        <div className="font-bionix w-full h-full bottom-0 text-center relative overflow-y-hidden overflow-x-hidden">
          <div
            className="absolute inset-0 w-full bg-floralWhite hidden sm:block -top-4"
            style={{
              clipPath:
                "polygon(27% 4%, 75% 0%, 100% 15%, 100% 100%, 0 100%, 0 24%)",
            }}
          ></div>
          <div
            className="absolute inset-0 w-full bg-[#181818] hidden sm:block"
            style={{
              clipPath:
                "polygon(27% 4%, 75% 0%, 100% 15%, 100% 100%, 0 100%, 0 24%)",
            }}
          ></div>
          <div className="absolute inset-0 w-full h-[20vw] sm:hidden bg-[#181818] bg-cover bg-no-repeat"></div>

          {/* Content overlay */}
          <div className="relative z-10">
            <h2 className="uppercase text-[3vw] text-[#F54E25] font-bold mb-4 mt-[5%]">
              Coordinators
            </h2>
            <div className="flex justify-around font-bold text-[#FFFAF0] text-[2.5vw] pb-4">
              {eventData.eventCoordinators.map((coo, idx) => (
                <div key={idx}>{coo.name}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CulravEvent;