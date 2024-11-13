import React from "react";
import { useState, useEffect } from "react";
import ContentBox from "../../assets/userDashBoard/ContentBox.png";
import Axios from "../profile_DashBoard/axiosService.js";
import useAuth from "@/lib/useAuth";
import { useNavigate } from "react-router-dom";
import getUser from "../profile_DashBoard/userService";
const AllDC = () => {
  // const coordinators = [
  //   {
  //     name: "John Doe",
  //     email: "john.doe@example.com",
  //     phone: "123-456-7890",
  //     department: "Computer Science",
  //   },
  //   {
  //     name: "Jane Smith",
  //     email: "jane.smith@example.com",
  //     phone: "234-567-8901",
  //     department: "Mechanical Engineering",
  //   },
  //   {
  //     name: "Alice Johnson",
  //     email: "alice.johnson@example.com",
  //     phone: "345-678-9012",
  //     department: "Electrical Engineering",
  //   },
  //   {
  //     name: "Bob Brown",
  //     email: "bob.brown@example.com",
  //     phone: "456-789-0123",
  //     department: "Civil Engineering",
  //   },
  // ];

  const isAuthenticated = useAuth();
  const navigate = useNavigate();
  const { user, token } = getUser();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const [coordinators, setCoordinators] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCoordinators = async () => {
      try {
        const response = await Axios.get("/admin/v1/getalldcs", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response?.data?.success === "true") {
          setCoordinators(response.data.data);
        } else {
          setError(response.data.message);
        }
      } catch (err) {
        console.error("Error fetching department coordinators:", err);
        setError("Failed to fetch department coordinators.");
      }
    };

    fetchCoordinators();
  }, []);

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
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead>
            <tr className="bg-scheduleLargeText text-white">
              <th className="py-3 px-4 text-left">Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Phone</th>
              <th className="py-3 px-4 text-left">Department</th>
            </tr>
          </thead>
          <tbody>
            {coordinators.map((coordinator, index) => (
              <tr key={index} className="border-b">
                <td className="py-2 px-4">{coordinator.name}</td>
                <td className="py-2 px-4">{coordinator.email}</td>
                <td className="py-2 px-4">{coordinator.phone}</td>
                <td className="py-2 px-4">{coordinator.department}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllDC;
