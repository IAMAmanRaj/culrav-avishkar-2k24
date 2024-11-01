import { useState } from "react";
import Hamburger from "hamburger-react";
import useAuth from "../../lib/useAuth";
import logo from "../../assets/general/logo.webp";

import hamburgerBg from "../../assets/Home/HamburgerBg.jpg";
import { useNavigate } from "react-router-dom";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const auth = useAuth();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="relative">
      <div className="z-[90] absolute top-8 right-4">
        <Hamburger
          toggled={isOpen}
          toggle={toggleMenu}
          color="#fff"
          size={30}
        />
      </div>

      <div
        className={`fixed inset-0 py-16 w-full h-full text-white transition-all duration-700 ease-in-out transform ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        } z-40`}
        style={{
          backgroundImage: `url(${hamburgerBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <nav className="flex flex-col justify-center gap-12 items-center h-full relative text-4xl font-bebas text-navlink">
          <div>
            <img
              src={logo}
              className="logo absolute -top-[9vh] left-4 logo hover:cursor-pointer w-auto h-28 "
            ></img>
          </div>
          <ul className="flex flex-col items-center justify-center gap-1">
            <li className="py-2 px-4 hover:text-register transition-all duration-300 ease-in-out">
              <a href="/culrav-landing">CULRAV</a>
            </li>
            <li className="py-2 px-4 hover:text-register transition-all duration-300 ease-in-out">
              <a href="/avishkar-landing">AVISHKAR</a>
            </li>
            <li className="py-2 px-4 hover:text-register transition-all duration-300 ease-in-out">
              <a href="#">GALLERY</a>
            </li>
            <li className="py-2 px-4 hover:text-register transition-all duration-300 ease-in-out">
              <a href="/team">TEAM</a>
            </li>
            <li className="py-2 px-4 hover:text-register transition-all duration-300 ease-in-out">
              <a href="/sponsors">SPONSORS</a>
            </li>
            <li className="py-2 px-4 hover:text-register transition-all duration-300 ease-in-out">
              <a href="/schedule">SCHEDULE</a>
            </li>
          </ul>
          {auth ? (
            <>
              <a href="/dashboard">
                <button
                  className={`md:flex w-[9.8rem] h-[4rem] tracking-wider bg-register text-white items-center justify-center font-semibold font-bebas hover:text-register hover:bg-white transition-all duration-500 ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  <h1 className="text-[2.2rem]">PROFILE</h1>
                </button>
              </a>
            </>
          ) : (
            <a href="/registration">
              <button
                className={`md:flex w-[9.8rem] h-[4rem] tracking-wider bg-register text-white items-center justify-center font-semibold font-bebas hover:text-register hover:bg-white transition-all duration-500 ${
                  isOpen ? "block" : "hidden"
                }`}
              >
                <h1 className="text-[2.2rem]">REGISTER</h1>
              </button>
            </a>
          )}
        </nav>
      </div>
    </div>
  );
};

export default HamburgerMenu;
