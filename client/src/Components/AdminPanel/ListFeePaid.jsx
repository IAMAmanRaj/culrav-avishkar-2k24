import React, { useEffect, useState } from "react";
import ContentBox from "../../assets/userDashBoard/ContentBox.png";
import useAuth from "@/lib/useAuth";
import { useNavigate } from "react-router-dom";
import getUser from "../profile_DashBoard/userService";
import Axios from "../profile_DashBoard/axiosService";

const ListFeePaid = () => {
  const [feePaidMembers, setFeePaidMembers] = useState([]); // State to hold fee-paid members list

  // Dummy data for fee-paid members
  const dummyMembers = [
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      college: "ABC College",
      phone: "123-456-7890",
    },
    {
      name: "Bob Smith",
      email: "bob@example.com",
      college: "XYZ University",
      phone: "987-654-3210",
    },
    {
      name: "Charlie Brown",
      email: "charlie@example.com",
      college: "DEF Institute",
      phone: "555-666-7777",
    },
  ];

  const isAuthenticated = useAuth();
  const navigate = useNavigate();
  const { user, token } = getUser();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  const handleGetList = async () => {
    try {
      const response = await Axios.get("/admin/v1/getallFeePaid", {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response?.data?.success) {
        setFeePaidMembers(response?.data?.users);
      } else {
        console.log("some error occured");
      }
    } catch (err) {
      console.log(err);
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
        <div className="w-full flex flex-col items-center mb-4">
          <h1 className="text-white items-center justify-center">
            List of all fee paid members
          </h1>
          <button
            className="text-[30px] font-bebas flex items-center justify-center text-white bg-scheduleOrange h-[30px] w-[215px] py-[8px] px-[29px] mt-2"
            onClick={handleGetList} // Call handleGetList on button click
          >
            GET LIST
          </button>
        </div>

        {/* Render the list of fee-paid members if feePaidMembers array is populated */}
        {feePaidMembers.length > 0 && (
          <div className="mt-6 overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg shadow-md">
              <thead>
                <tr className="bg-scheduleLargeText text-white">
                  <th className="py-3 px-4 text-left">Name</th>
                  <th className="py-3 px-4 text-left">Email</th>
                  <th className="py-3 px-4 text-left">College</th>
                  <th className="py-3 px-4 text-left">Phone No.</th>
                </tr>
              </thead>
              <tbody>
                {feePaidMembers.map((member, index) => (
                  <tr key={index} className="border-b">
                    <td className="py-2 px-4">{member.name}</td>
                    <td className="py-2 px-4">{member.email}</td>
                    <td className="py-2 px-4">{member.college}</td>
                    <td className="py-2 px-4">{member.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListFeePaid;
