import React from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import ContentBox from "../../../assets/userDashBoard/ContentBox.png";

const AcceptedTeamMembersAllEvents = () => {
  const apiClient = axios.create({
    baseURL: "http://localhost:3000",
  });

  const handleDownload = async () => {
    try {
      const response = await apiClient.get(
        `/api/admin/v1/downloadAcceptedTeamMembers`
      );
      const { data, success } = response.data;

      if (success && data) {
        const rows = [];

        // Extract data for each event and team
        for (const eventName in data) {
          for (const teamName in data[eventName]) {
            const team = data[eventName][teamName];
            const teamSize = team.TeamSize;

            // Add rows for each team member
            for (let i = 1; i <= teamSize; i++) {
              rows.push({
                Event: eventName,
                Team: teamName,
                "Team Size": teamSize,
                Name: team[`Name ${i}`] || "",
                Email: team[`Email ${i}`] || "",
                Phone: team[`Phone ${i}`] || "",
                College: team[`College ${i}`] || "",
              });
            }
          }
        }

        // Create worksheet and workbook
        const worksheet = XLSX.utils.json_to_sheet(rows);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(
          workbook,
          worksheet,
          "Accepted Team Members"
        );

        // Write the workbook to an Excel file
        XLSX.writeFile(workbook, `AcceptedTeamMembers.xlsx`);
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
      <button
        className="text-[30px] font-bebas flex items-center justify-center text-white bg-scheduleOrange h-[30px] w-[215px] py-[8px] px-[29px] mt-2"
        onClick={handleDownload}
      >
        Download
      </button>
    </div>
  );
};

export default AcceptedTeamMembersAllEvents;
