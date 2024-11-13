import React, { useEffect, useState } from "react";
import ContentBox from "../../assets/userDashBoard/ContentBox.png";
import Axios from "../profile_DashBoard/axiosService";
import getUser from "../profile_DashBoard/userService";
import useAuth from "@/lib/useAuth";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { ClipLoader } from "react-spinners";

const ParticipatingTeams = () => {
  const [teams, setTeams] = useState([]); // State to hold the teams list
  const [eventId, setEventId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, token } = getUser();
  const isAuthenticated = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  const handleGetList = async () => {
    setMessage(""); // Clear previous messages

    if (!eventId) {
      setMessage("Please enter an Event ID.");
      return;
    }

    setLoading(true);
    try {
      const response = await Axios.get(
        `/admin/v1/getallTeamEvents/${eventId}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      if (response?.data?.success) {
        const event = response.data.event;
        const formattedTeams = event.participatingTeams.map((team) => ({
          name: team.teamName,
        }));
        setTeams(formattedTeams);
        toast.success("Teams fetched successfully!", {
          icon: "🚀",
          duration: 2000,
          className: "toast-blue",
        });
      } else {
        setMessage(response.data.message || "Failed to retrieve teams.");
        toast.error(response.data.message || "Failed to retrieve teams.", {
          duration: 2000,
          className: "toast-error",
        });
      }
    } catch (error) {
      console.error("Error fetching teams:", error);
      setMessage("An error occurred. Please try again.");
      toast.error("An error occurred. Please try again.", {
        duration: 2000,
        className: "toast-error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="md:w-[74vw] custom1000:w-[80vw] custom1840:w-[83vw] w-full absolute flex justify-center items-center h-full md:h-auto"
      style={{
        height: "100%",
        backgroundImage: `url(${ContentBox})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-9 text-xs xs:text-sm md:text-lg rounded-md py-7 bg-scheduleLargeText w-[90%] sm:w-[67%] md:w-[60%] max-w-[640px] overflow-x-hidden overflow-y-hidden">
        <div className="w-full flex flex-col mb-4">
          <div className="flex flex-col gap-2 lg:flex-row items-center ">
            <div className="w-[30%] flex">
              <h1 className="text-white flex items-center justify-center">
                Event ID :
              </h1>
            </div>
            <div className="w-[80%] rounded-lg bg-lightMineshaft flex items-center px-6">
              <input
                type="text"
                className="w-full h-[50px] bg-lightMineshaft text-mineShaft outline-none"
                placeholder="Enter Event ID"
                value={eventId}
                onChange={(e) => setEventId(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-2 justify-center items-center ">
            <button
              className="text-[35px] sm:text-[30px] mt-4 font-bebas flex items-center justify-center text-white bg-scheduleOrange h-auto w-auto py-4 sm:py-[4px] px-[30px]"
              onClick={handleGetList}
              disabled={loading}
            >
              {loading ? (
                <ClipLoader color="#000000" size={30} />
              ) : (
                "GET LIST"
              )}
            </button>
          </div>
          {message && <p className="text-white mt-4">{message}</p>}
        </div>

        {/* Render the list of teams if teams array is populated */}
        {teams.length > 0 && (
          <div className="mt-6 h-[300px] overflow-y-scroll">
            <table className="min-w-full round bg-white ded-lg shadow-md">
              <thead>
                <tr className="bg-scheduleLargeText text-white">
                  <th className="py-3 px-4 text-left">Team Name</th>
                  {/* <th className="py-3 px-4 text-left">Team Leader</th>
                  <th className="py-3 px-4 text-left">Team Members</th>
                  <th className="py-3 px-4 text-left">Event</th> */}
                </tr>
              </thead>
              <tbody  >
                {teams.map((team, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{team.name}</td>
                    {/* <td className="py-2 px-4">{team.leader}</td>
                    <td className="py-2 px-4">{team.members}</td>
                    <td className="py-2 px-4">{team.event}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default ParticipatingTeams;