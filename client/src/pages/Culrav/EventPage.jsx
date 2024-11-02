import bullet from "@/images/bullet1.png";
import layer1 from "@/images/Layer1.png";
import paint from "@/images/paint.png";
import wall from "@/images/walls1.png";
import { useState } from "react";
import TeamRegisterModal from "../modal/TeamRegisterModal";

const teams = [
  "Team 1",
  "Team 2",
  "Team 3",
  "Team 4",
  "Team 5",
  "Team 6",
  "Team 7",
];

function CulravEvent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && (
        <TeamRegisterModal
          teams={teams}
          onClose={() => {
            setIsModalOpen(false);
          }}
          themeColor="black"
        />
      )}
      <div
        className="flex flex-col min-h-screen bg-[#FFFAF0] text-[#181818] w-full bg-fixed overflow-x-hidden pt-[8%] sm:pt-[3%] md:pt-[4%] lg:pt-[3%] "
        style={{
          backgroundImage: `url(${wall})`,
          backgroundRepeat: "repeat",
          backgroundPosition: "top-left",
          backgroundSize: "100vw",
        }}
      >
        {/* Layer Background Wrapper for RANGSAAZI and Description */}
        <div
          className="relative flex flex-col items-center justify-center text-center w-[80vw] m-auto "
          style={{
            backgroundImage: `url(${layer1})`,
            backgroundSize: "contain", // Changed to cover
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center 20vh",
            padding: "4rem", // Optional padding for spacing
          }}
        >
          {/* RANGSAAZI Section */}
          <div
            className="flex items-center justify-center w-full text-[#FFFAF0] "
            style={{
              backgroundImage: `url(${paint})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              width: "40vw",
              height: "23vw",
              margin: "0 auto",
            }}
          >
            <span className="font-bionix text-[3.5vw] sm:text-[3vw] pl-[6%]">
              RANGSAAZI
            </span>
          </div>

          {/* Description Section */}
          <section className="relative items-center text-center pb-10 pl-[4vw] sm:pb-0 w-full ">
            <h2 className="text-[#F54E25] font-bionix text-[3vw] sm:text-[2.5vw] uppercase mb-1">
              Description
            </h2>
            <p
              className="text-[2.5vw] sm:text-[2vw] p-[0.8vw] text-[#181818] font-bebas"
              style={{ wordSpacing: "0.2em" }}
            >
              We invite you all to take part in the most popular form of
              theatre, stage play. Rangmanch brings you Natymanach, stage play.
              So get up and get ready to mesmerize the world with your
              theatrics.
            </p>
          </section>
        </div>

        {/* Rules Section */}
        <section className="pl-[18vw] -mt-[10vh] sm:mt-0 z-10">
          <h2 className="text-[#F54E25] font-bionix text-[3vw] sm:text-[2.5vw] pr-[15vw] uppercase text-center ">
            Rules
          </h2>
          <ul className="w-full mx-[5%] text-[#181818] font-bebas space-y-4 pr-[10%] items-start justify-center flex flex-col">
            {[
              "The team shall consist of a minimum of 8 and a maximum of 35 people (including people at lights, music and handling props).",
              "The team shall consist of a minimum of 8 and a maximum of 35 people (including people at lights, music and handling props).",
              "The team shall consist of a minimum of 8 and a maximum of 35 people (including people at lights, music and handling props).",
              "The team shall consist of a minimum of 8 and a maximum of 35 people (including people at lights, music and handling props).",
              "The team shall consist of a minimum of 8 and a maximum of 35 people (including people at lights, music and handling props).",
              "The team shall consist of a minimum of 8 and a maximum of 35 people (including people at lights, music and handling props).",
            ].map((rule, index) => (
              <li
                key={index}
                className="flex items-start w-[85%] text-[2.5vw] sm:text-[2vw]  mt-[1.5%]"
                style={{ wordSpacing: "0.15em" }}
              >
                <div
                  className="mr-4 bg-cover bg-center p-[0.9vw] sm:p-[0.8vw] mt-[1.5%]"
                  style={{
                    backgroundImage: `url(${bullet})`,
                    width: "0.5em",
                    height: "0.5em",
                  }}
                ></div>
                {rule}
              </li>
            ))}
          </ul>
        </section>

        {/* Register Button */}
        <div className="flex justify-center py-6 pl-[5vw]">
          <button
            onClick={() => {
              setIsModalOpen(true);
            }}
            className="bg-[#F54E25] text-[2.5vw] font-bionix hover:bg-orange-600 text-[#FFFAF0] font-bold py-2 px-6"
          >
            Register
          </button>
        </div>

        {/* Footer Section */}
        <div className="font-bionix w-full h-full bottom-0 text-center relative overflow-y-hidden overflow-x-hidden">
          <div
            className="absolute inset-0 w-full bg-floralWhite hidden sm:block -top-4"
            style={{
              clipPath:
                "polygon(27% 4%, 75% 0%, 100% 15%, 100% 100%, 0 100%, 0 24%)",

              /* Other styles */
            }}
          ></div>
          <div
            className="absolute inset-0 w-full bg-[#181818] hidden sm:block  "
            style={{
              clipPath:
                "polygon(27% 4%, 75% 0%, 100% 15%, 100% 100%, 0 100%, 0 24%)",

              /* Other styles */
            }}
          ></div>
          <div className="absolute inset-0 w-full h-[20vw] sm:hidden bg-[#181818] bg-cover bg-no-repeat"></div>

          {/* Content overlay */}
          <div className="relative z-10">
            <h2 className="uppercase text-[3vw] text-[#F54E25] font-bold mb-4 mt-[5%]">
              Coordinators
            </h2>
            <div className="flex justify-around font-bold text-[#FFFAF0] text-[2.5vw] pb-4">
              <div>Person Name</div>
              <div>Person Name</div>
              <div>Person Name</div>
              <div>Person Name</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CulravEvent;
