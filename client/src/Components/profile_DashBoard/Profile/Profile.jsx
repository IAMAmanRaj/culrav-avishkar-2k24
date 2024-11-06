import { useEffect, useState } from "react";
import ContentBox from "../../../assets/userDashBoard/ContentBox.png";
import { useSelector } from "react-redux";
import useAuth from "../../../lib/useAuth.js"
import { useNavigate } from "react-router-dom";


const Profile = () => {
  const [user, setUser] = useState({})
  const [token , setToken] = useState({})

  const isAuthenticated = useAuth();
  const navigate  = useNavigate()
  const jwttoken = useSelector((state) => state.user.token);
  const userDetails = useSelector((state) => state.user.currentUser)
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated]);

  const getUserData = () => {
    setToken(jwttoken)
    setUser(userDetails)
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <div
      className="md:w-[74vw] custom1000:w-[80vw] custom1840:w-[83vw] w-full absolute  flex justify-center items-center h-full md:h-auto"
      style={{
        height: '100%',
        backgroundImage: `url(${ContentBox})`,
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
      }}
    >
      <div className="px-9 text-xs xs:text-sm md:text-lg rounded-md py-7 bg-scheduleLargeText w-[90%] sm:w-[67%] md:w-[60%] max-w-[640px]">
        <div className="w-full h-[40px] flex mb-4">
          <div className="w-[20%] h-full flex">
            <h1 className="text-white flex items-center justify-center">Name</h1>
          </div>
          <div className="w-[80%] rounded-lg h-full bg-lightMineshaft flex items-center px-6">
            <h1 className="text-mineShaft flex items-center justify-center">{user?.name}</h1>
          </div>
        </div>

        <div className="w-full h-[40px] flex mb-4">
          <div className="w-[20%] h-full flex">
            <h1 className="text-white flex items-center justify-center">User ID</h1>
          </div>
          <div className="w-[80%] rounded-lg h-full bg-lightMineshaft flex items-center px-6">
            <h1 className="text-mineShaft flex items-center justify-center">{user?.userName}</h1>
          </div>
        </div>

        <div className="w-full h-[40px] flex mb-4">
          <div className="w-[20%] h-full flex">
            <h1 className="text-white flex items-center justify-center">Email</h1>
          </div>
          <div className="w-[80%] rounded-lg h-full bg-lightMineshaft flex items-center px-6">
            <h1 className="text-mineShaft flex items-center justify-center">{user?.email}</h1>
          </div>
        </div>

        <div className="w-full h-[40px] flex mb-4">
          <div className="w-[20%] h-full flex">
            <h1 className="text-white flex items-center justify-center">Phone</h1>
          </div>
          <div className="w-[80%] rounded-lg h-full bg-lightMineshaft flex items-center px-6">
            <h1 className="text-mineShaft flex items-center justify-center">{user?.phone}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
