import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import useAuth from "@/lib/useAuth";
import { Toaster } from "react-hot-toast";
import logo from "../../assets/general/logo.webp";


function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <>
      {/* Render for larger screens */}
      <div className="w-[100vw] custom1980:h-[92px] md:h-[60px] px-8 py-2 fixed bg-scheduleLargeText items-center justify-between z-50 md:flex hidden">
        <img
          src={logo}
          className="logo hover:cursor-pointer w-auto h-28 object-contain bg-transparent"
          onClick={handleLogoClick}
        />

        <div className="navlinks w-[67%] flex text-navlink h-full items-center justify-between font-bebas md:text-[1.6vw]">
          <h1
            className="hover:text-register tracking-widest transition-colors cursor-pointer duration-300"
            onClick={() => {
              navigate("/culrav-landing");
            }}
          >
            CULRAV
          </h1>
          <h1
            className="hover:text-register tracking-widest transition-colors cursor-pointer duration-300"
            onClick={() => {
              navigate("/avishkar-landing");
            }}
          >
            AVISHKAR
          </h1>
          <h1 className="hover:text-register tracking-widest transition-colors cursor-pointer duration-300">
            GALLERY
          </h1>
          <h1
            className="hover:text-register tracking-widest transition-colors cursor-pointer duration-300"
            onClick={() => {
              navigate("/team");
            }}
          >
            TEAM
          </h1>
          <h1
            className="hover:text-register tracking-widest transition-colors cursor-pointer duration-300"
            onClick={() => {
              navigate("/sponsors");
            }}
          >
            SPONSORS
          </h1>
          <h1
            className="hover:text-register tracking-widest transition-colors cursor-pointer duration-300"
            onClick={() => {
              navigate("/schedule");
            }}
          >
            SCHEDULE
          </h1>
        </div>

        {isAuthenticated ? (
          <button
            className="auth w-[11vw] lg:w-[7.1vw] h-[47px] tracking-wider bg-register text-white items-center justify-center font-semibold font-bebas hover:text-register hover:bg-white transition-all duration-500"
            onClick={() => navigate("/dashboard")}
          >
            <h1 className="lg:text-[1.2vw] md:text-[1.5vw] ">PROFILE</h1>
          </button>
        ) : (
          <button
            onClick={() => {
              navigate("/registration");
            }}
            className="auth w-[11vw] lg:w-[7.1vw] h-[47px] tracking-wider bg-register text-white items-center justify-center font-semibold font-bebas hover:text-register hover:bg-white transition-all duration-500"
          >
            <h1 className="lg:text-[1.2vw] md:text-[1.5vw] ">REGISTER</h1>
          </button>
        )}
      </div>

      {/* Render for mobile screens */}
      <div className=" w-[100vw] -top-[15px] absolute bg-scheduleLargeText flex items-center justify-end z-50 md:hidden">
      <div className="z-30">
            <img
              src={logo}
              className="logo absolute left-4 logo hover:cursor-pointer w-auto h-28 "
            ></img>
          </div>
        <div>
          <HamburgerMenu />
        </div>
      </div>
      <Toaster  />
    </>
  );
}

export default Navbar;
