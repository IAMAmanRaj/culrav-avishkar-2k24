import { useEffect, useState } from "react";
import Popup from "@/Components/profile_DashBoard/shared/Popup";
import VerticalSideBar from "@/Components/profile_DashBoard/shared/VerticalSideBar";
import { useLocation } from "react-router-dom";

const UserProfilePage = () => {
  const pathname = useLocation().pathname;
  const [activeItem, setActiveItem] = useState("Upload Resume");

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