import layer2 from "@/images/avishlayer2.png";
import bullet from "@/images/bullet1.png";
import avishkareventbg from "@/images/Overlay.png";
import paint from "@/images/paint.png";
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

function AvishkarEvent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      {isModalOpen && (
        <TeamRegisterModal
          teams={teams}
          onClose={() => {
            setIsModalOpen(false);
          }}
          themeColor="white"
        />
      )}
      <div
        className="flex flex-col items-center pt-[10vh] justify-center min-h-screen w-full bg-[#181818]   text-white bg-fixed overflow-x-hidden"
        style={{
          backgroundImage: `url(${avishkareventbg}), url(${layer2})`,
          backgroundRepeat: "no-repeat, repeat",
          backgroundPosition: "center, top-left",
          backgroundSize: "cover, 250px auto",
        }}
      >
        {/* Paint Background Section */}
        <div
          className="flex items-center  justify-center text-center  text-white"
          style={{
            backgroundImage: `url(${paint})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            width: "45vw",
            height: "25vw",
            margin: "0 auto",
          }}
        >
          <span className="font-bionix text-[3vw] pl-[6%]">KREEDOMANIA</span>
        </div>

        {/* Content Wrapper */}
        <div className="flex-grow pl-[7%] mr-[5%]">
          {/* Description Section */}
          <section className="flex flex-col items-center text-center">
            <h2 className="text-[#F54E25] font-bionix text-[2.5vw] uppercase ">
              Description
            </h2>
            <p
              className="w-full text-[2.5vw] font-bebas pl-[10%] pr-[10%]"
              style={{ wordSpacing: "0.2em" }}
            >
              We invite you all to take part in the most popular form of
              theatre, stage play. Rangmanch brings you Natymanach, stage play.
              So get up and get ready to mesmerize the world with your
              theatrics.
            </p>
          </section>

          {/* Rules Section */}
          <section className="px-4 py-6 pl-[10vw]">
            <h2 className="text-[#F54E25] font-bionix text-[2.5vw] pr-[9vw] uppercase text-center mb-2">
              Rules
            </h2>
            <ul className="w-full mx-[5%] font-bebas space-y-4 items-start justify-center flex flex-col">
              {[
                "The team shall consist of a minimum of 8 and a maximum of 35 people ",
                "The team shall consist of a minimum of 8 and a maximum of 35 people (including people at lights, music and handling props).",
                "The time limit for each performance is 20 minutes.",
                "Use of harmful props or materials is prohibited.",
                "Any kind of offensive content will lead to disqualification.",
                "Teams must respect other participants and maintain decorum.",
              ].map((rule, index) => (
                <li
                  key={index}
                  className="flex items-start text-[2.5vw] mr-[10%]"
                  style={{ wordSpacing: "0.2em" }}
                >
                  <div
                    className="mr-4 bg-cover bg-center p-[0.8vw] mt-[1.5%] "
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
        </div>

        {/* Footer Section */}
        <div className="w-full text-center relative">
          {/* Desktop Background */}
          <div
            className="absolute inset-0 w-full bg-floralWhite hidden sm:block -top-3"
            style={{
              clipPath:
                "polygon(27% 4%, 75% 0%, 100% 15%, 100% 100%, 0 100%, 0 24%)",

              /* Other styles */
            }}
          ></div>
          <div
            className="absolute inset-0 w-full bg-[#F54E25] hidden sm:block  "
            style={{
              clipPath:
                "polygon(27% 4%, 75% 0%, 100% 15%, 100% 100%, 0 100%, 0 24%)",

              /* Other styles */
            }}
          ></div>
          {/* Mobile Background */}
          <div className="absolute inset-0 w-full h-full bg-cover bg-[#181818] bg-no-repeat sm:hidden border-t-[5px] border-white"></div>

          {/* Content overlay */}
          <div className="relative z-10 py-6">
            <h2 className="uppercase text-[3vw] font-bionix mb-4">
              Coordinators
            </h2>
            <div className="flex justify-around font-bionix text-[2.5vw]">
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

export default AvishkarEvent;
