import { useEffect, useState } from "react";
import Popup from "@/Components/profile_DashBoard/shared/Popup";
import VerticalSideBar from "@/Components/profile_DashBoard/shared/VerticalSideBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProfilePage = () => {
  const pathname = useLocation().pathname;
  const [activeItem, setActiveItem] = useState("Upload Resume");
  const user = useSelector((state) => state.user.currentUser);
  const navigate = useNavigate();
  const role = user?.role;

  useEffect(() => {
    if (pathname === "/dashboard") {
      if (role !== "User") {
        navigate("/");
      }
    }
  }, [pathname, role, navigate]);

  useEffect(() => {
    if (pathname === "/admin-panel") {
      setActiveItem("Profile");
    }
  }, [pathname]);

  return (
    <div className="overflow-hidden">
      <Popup activeItem={activeItem} setActiveItem={setActiveItem} />
      <VerticalSideBar activeItem={activeItem} setActiveItem={setActiveItem} />
    </div>
  );
};

export default UserProfilePage;