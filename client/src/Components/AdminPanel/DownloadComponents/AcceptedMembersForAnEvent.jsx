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
      // Send request to the API with the event ID as a parameter
      const response = await apiClient.get(
        `/api/admin/v1/downloadAcceptedTeamMembers/${eventId}`
      );

      const { data, success } = response.data;

      if (success && data) {
        // Convert the "data" object to an Excel sheet
        const workbook = XLSX.utils.book_new();
        const formattedData = [];

        // Format data into a structure suitable for XLSX
        for (const eventName in data) {
          for (const teamName in data[eventName]) {
            const team = data[eventName][teamName];
            const row = {
              Event: eventName,
              Team: teamName,
              TeamSize: team.TeamSize,
              Name: team["Name 1"],
              Email: team["Email 1"],
              Phone: team["Phone 1"],
              College: team["College 1"],
            };
            formattedData.push(row);
          }
        }

        // Convert JSON to worksheet
        const worksheet = XLSX.utils.json_to_sheet(formattedData);
        XLSX.utils.book_append_sheet(workbook, worksheet, "Accepted Members");

        // Generate Excel file and trigger download
        XLSX.writeFile(workbook, `AcceptedMembers_${eventId}.xlsx`);
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
          Accepted Members for an Event
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
