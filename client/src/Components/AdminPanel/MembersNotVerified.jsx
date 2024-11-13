import React, { useEffect, useState } from "react";
import ContentBox from "../../assets/userDashBoard/ContentBox.png";
import useAuth from "@/lib/useAuth";
import { useNavigate } from "react-router-dom";
import getUser from "../profile_DashBoard/userService";
import Axios from "../profile_DashBoard/axiosService";
import toast from "react-hot-toast";

// Dummy data for unverified users
const unverifiedUsersData = [
  {
    name: "John Doe",
    college: "ABC University",
    email: "john@example.com",
    phone: "123-456-7890",
    image: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    name: "Jane Smith",
    college: "XYZ College",
    email: "jane@example.com",
    phone: "987-654-3210",
    image: "https://via.placeholder.com/150", // Placeholder image
  },
  {
    name: "Alice Johnson",
    college: "DEF Institute",
    email: "alice@example.com",
    phone: "555-666-7777",
    image: "https://via.placeholder.com/150", // Placeholder image
  },
];

const MembersNotVerified = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [notVerifiedUsers, setNotVerifiedUsers] = useState([]);

  const isAuthenticated = useAuth();
  const navigate = useNavigate();
  const { user, token } = getUser();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [isAuthenticated]);

  useEffect(() => {
    const fetchNotVerifiedUsers = async () => {
      try {
        const response = await Axios.get("/admin/v1/getallFeeNotPaid", {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response?.data?.success) {
          const data = response?.data?.users;
          setNotVerifiedUsers(data);
        }
      } catch (error) {
        console.error("Error fetching not verified users:", error);
      }
    };

    fetchNotVerifiedUsers();
  }, [token]);

  const handleVerifyClick = (user) => {
    setSelectedUser(user); // Set the selected user to show in the modal
    setModalOpen(true); // Open the modal
  };

  const verify = async () => {
    const verifyPayment = async () => {
      try {
        const response = await Axios.post(
          "/admin/v1/verifypayment",
          {
            userid: user._id,
            paymentstatus: true,
            email: selectedUser.email,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        if (response?.data?.success) {
          console.log("Payment verified successfully!");
          toast.success("Payment verified successfully!");
          handleCloseModal();
        }
      } catch (error) {
        console.error("Error verifying payment:", error);
      }
    };
    verifyPayment();
  };

  const handleCloseModal = () => {
    setModalOpen(false); // Close the modal
    setSelectedUser(null); // Clear the selected user
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
          List of Unverified Users
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-md">
            <thead>
              <tr className="bg-scheduleLargeText text-white">
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">College</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Phone No.</th>
                <th className="py-3 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {notVerifiedUsers.map((user, index) => (
                <tr key={index} className="border-b">
                  <td className="py-2 px-4">{user?.name}</td>
                  <td className="py-2 px-4">{user?.college}</td>
                  <td className="py-2 px-4">{user?.email}</td>
                  <td className="py-2 px-4">{user?.phone}</td>
                  <td className="py-2 px-4">
                    <button
                      className="text-white bg-scheduleOrange py-1 px-3 rounded"
                      onClick={() => handleVerifyClick(user)}
                    >
                      Verify
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Modal for verification */}
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full">
              <h2 className="text-lg font-bold mb-4">Verify User</h2>
              {selectedUser && (
                <>
                  <img
                    src={selectedUser?.paymentLink}
                    alt={selectedUser.name}
                    className="mb-4 rounded"
                  />
                </>
              )}
              <button
                className="text-white bg-scheduleOrange py-2 px-4 rounded mt-4"
                onClick={() => {
                  // Handle verification logic here
                  verify();
                  handleCloseModal();
                }}
              >
                Confirm Verify
              </button>
              <button
                className="text-gray-600 bg-gray-200 py-1 px-3 rounded mt-2 ml-2"
                onClick={handleCloseModal}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MembersNotVerified;
