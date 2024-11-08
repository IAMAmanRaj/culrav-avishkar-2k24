import React from "react";
import { useState } from "react";
import ContentBox from "../../assets/userDashBoard/ContentBox.png";
import axios from "axios";
const MakeDC = () => {
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/admin/v1/makedc", {
        email,
        department,
      });
      alert(response.data.message);
    } catch (error) {
      console.error("Error making department coordinator:", error);
      alert(error.response?.data?.message || "An error occurred");
    }
  };
  return (
    <div
      className="md:w-[74vw] custom1000:w-[80vw] custom1840:w-[83vw] w-full absolute  flex justify-center items-center h-full md:h-auto"
      style={{
        height: "100%",
        backgroundImage: `url(${ContentBox})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="px-9 text-xs xs:text-sm md:text-lg rounded-md py-7 bg-scheduleLargeText w-[90%] sm:w-[67%] md:w-[60%] max-w-[640px]">
        <div className="w-full flex flex-col mb-4">
          <div className="w-[80%] my-2 rounded-lg bg-lightMineshaft flex items-center px-6">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-lightMineshaft text-mineShaft outline-none" // Removed h-full to allow input height to adjust
              placeholder="Enter Email ID"
            />
          </div>

          <div className="w-[80%] rounded-lg bg-lightMineshaft flex items-center px-6">
            <input
              type="text"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="w-full bg-lightMineshaft text-mineShaft outline-none" // Removed h-full to allow input height to adjust
              placeholder="Enter Department"
            />
          </div>
          <div className="mt-2">
            <button
              className="text-[30px] font-bebas flex items-center justify-center text-white bg-scheduleOrange h-[30px] w-[215px] py-[8px] px-[29px]"
              onClick={handleSubmit}
            >
              Make DC
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeDC;
