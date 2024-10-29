import { useNavigate } from "react-router-dom";
import HamburgerMenu from "./HamburgerMenu";
import useAuth from "@/lib/useAuth";

function Navbar() {
  const navigate = useNavigate();
  const isAuthenticated = useAuth();


  return (
    <div className="w-[100vw] custom1980:h-[92px] md:h-[60px] px-4 py-2 fixed bg-scheduleLargeText flex items-center justify-between z-50">
      <div
        className="logo hover:cursor-pointer custom1980:w-[9vw]  h-[90%] md:w-[13vw] bg-transparent md:bg-zinc-600"
        onClick={() => {
          navigate("/");
        }}
      ></div>

      <div className="navlinks w-[67%] hidden md:flex text-navlink h-full items-center justify-between font-bebas md:text-[1.6vw]">
        <h1 className="hover:text-register tracking-widest transition-colors cursor-pointer duration-300">
          CULRAV
        </h1>
        <h1 className="hover:text-register tracking-widest transition-colors cursor-pointer duration-300">
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
        <h1 className="hover:text-register tracking-widest transition-colors cursor-pointer duration-300">
          SPONSORS
        </h1>
        <h1 className="hover:text-register tracking-widest transition-colors cursor-pointer duration-300">
          SCHEDULE
        </h1>
      </div>

      <div className="md:hidden flex items-center">
        <HamburgerMenu />
      </div>
      {isAuthenticated ? (
        <>
          <button
            className="auth hidden md:flex md:w-[11vw] lg:w-[7.1vw] h-[47px] tracking-wider bg-register text-white items-center justify-center font-semibold font-bebas hover:text-register hover:bg-white transition-all duration-500"
            onClick={() => navigate("/dashboard")}
          >
            <h1 className="lg:text-[1.2vw] md:text-[1.5vw] ">PROFILE</h1>
          </button>
        </>
      ) : (
        <button
          onClick={() => {
            navigate("/registration");
          }}
          className="auth hidden md:flex md:w-[11vw] lg:w-[7.1vw] h-[47px] tracking-wider bg-register text-white items-center justify-center font-semibold font-bebas hover:text-register hover:bg-white transition-all duration-500"
        >
          <h1 className="lg:text-[1.2vw] md:text-[1.5vw] ">REGISTER</h1>
        </button>
      )}
    </div>
  );
}

export default Navbar;