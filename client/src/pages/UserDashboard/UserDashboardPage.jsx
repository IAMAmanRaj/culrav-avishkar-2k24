import { useState } from "react";
import Popup from "@/Components/profile_DashBoard/shared/Popup";
import VerticalSideBar from "@/Components/profile_DashBoard/shared/VerticalSideBar";

const UserProfilePage = () => {
  const [activeItem, setActiveItem] = useState("Upload Resume");

  return (
    <div className="overflow-hidden">
      <Popup activeItem={activeItem} setActiveItem={setActiveItem}/>
      <VerticalSideBar activeItem={activeItem} setActiveItem={setActiveItem}/>
    </div>
  );
};

export default UserProfilePage;
