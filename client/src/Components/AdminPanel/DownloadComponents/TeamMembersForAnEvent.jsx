import React, { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import ContentBox from "../../../assets/userDashBoard/ContentBox.png";

const AcceptedMembersForAnEvent = () => {
  const [eventId, setEventId] = useState("");
  const apiClient = axios.create({
    baseURL: "http://localhost:3000",
  });

  const handleDownload = async () => {
    try {
      const response = await apiClient.get(
        `/api/admin/v1/downloadAllEventTeamMembers/${eventId}`
      );

      const { data, success } = response.data;

      if (success && data) {
        const rows = [];

        for (const eventName in data) {
          for (const teamName in data[eventName]) {
            const team = data[eventName][teamName];
            const teamSize = team.TeamSize;

            for (let i = 1; i <= teamSize; i++) {
              rows.push({
                Event: eventName,
                Team: teamName,
                "Team Size": teamSize,
                Name: team[`Name ${i}`],
                Email: team[`Email ${i}`],
                Phone: team[`Phone ${i}`],
                College: team[`College ${i}`],
                "Pending Name": team[`Pending Name ${i}`] || "",
                "Pending Email": team[`Pending Email ${i}`] || "",
                "Pending Phone": team[`Pending Phone ${i}`] || "",
                "Pending College": team[`Pending College ${i}`] || "",
              });
            }
          }
        }

        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Team Members");

        XLSX.writeFile(workbook, `TeamMembers_${eventId}.xlsx`);
      } else {
        console.error("Failed to download data.");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
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
      <div className="px-9 text-xs xs:text-sm md:text-lg rounded-md py-7 bg-scheduleLargeText w-[90%] sm:w-[67%] md:w-[60%] max-w-[640px]">
        <h1 className="text-white text-center mb-4">
          Team Members for an Event
        </h1>

        {/* Event ID input */}
        <div className="flex items-center mb-4">
          <div className="w-[20%]">
            <h1 className="text-white flex items-center justify-center">
              Event ID:
            </h1>
          </div>
          <div className="w-[80%] rounded-lg bg-lightMineshaft flex items-center px-6">
            <input
              type="text"
              className="w-full bg-lightMineshaft text-mineShaft outline-none"
              placeholder="Enter Event ID"
              value={eventId}
              onChange={(e) => setEventId(e.target.value)}
            />
          </div>
        </div>

        {/* Download button */}
        <div className="flex justify-around">
          <button
            className="text-[30px] font-bebas flex items-center justify-center text-white bg-scheduleOrange h-[30px] w-[215px] py-[8px] px-[29px]"
            onClick={handleDownload}
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default AcceptedMembersForAnEvent;
