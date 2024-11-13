import { useLocation } from "react-router-dom";
import ProfileTape from "../Home/ProfileTape";
function Footer() {
  const location = useLocation();
  const hiddenRoutes = [
    "/login",
    "/admin-panel",
    "/register",
    "/profile",
    "/outside-registration",
    "/registration",
    "/forget-password-token-verification",
    "/forget-password",
    "/verify-email",
    "/dashboard",
    "/culraveventpage",
    "/avishkareventpage",
  ]; // Add routes where the footer should be hidden

  // Check if the current route matches any of the hidden routes
  const shouldHideFooter = hiddenRoutes.includes(location.pathname);

  if (shouldHideFooter) {
    return null; // Hide the footer
  }

  const isHome = location.pathname === "/";

  return (
    <>
      <div className="flex flex-col w-full sticky z-10  bottom-0">
        <ProfileTape />

        <div className={`flex bg-floral_white text-dark_secondary flex-col ${isHome ? "custom1200:p-0" : ""} pt-[5%] pb-[5%] md:pb-[2%] justify-center items-center`}>
          <div className="text-center text-[6vw] md:text-[4.5vw] lg:text-[3.3vw] font-bionix tracking-wide">
            CULRAV-AVISHKAR
          </div>
          <div className="text-center text-[3.2vw] md:text-[2.3vw] lg:text-[1.5vw] font-normal font-bebas tracking-widest">
            Techno-Cultural Fest at MNNIT AllahabaD
          </div>
          <div className="md:mt-[2%] text-center text-[2.5vw] mt-[13%] md:text-[1.5vw] lg:text-[1vw] font-normal font-['Bebas Neue'] tracking-wider">
            Motilal Nehru National Institute of Technology, Allahabad ,Prayagraj
          </div>
          <hr className="hidden sm:flex w-[90%] mt-[2%] border-[1px] border-dark_secondary" />
          <div className="text-center text-dark_secondary mt-[10%] text-[3vw] md:text-[1.5vw] lg:text-[1.1vw] md:mt-[1%] font-normal font-bebas tracking-widest">
            ©CULRAV-AVISHKAR'24, MNNIT
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer