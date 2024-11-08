import { useEffect } from "react";
import EventCard from "@/Components/Culrav/EventCard";
import MainEvent from "@/Components/Culrav/MainEventCard";
import roller from "@/images/disc.png"; // Assuming roller image is imported
import cardBg from "@/images/image.png";
import culravData from "@/data/Event/culrav/events/culravData.js";
import culravImage from "@/assets/Home/culrav.webp";

function CulravLanding() {

  const events = culravData;
  return (
    <div className=" culrav-Landing-background w-auto h-auto relative z-20 flex flex-col items-center justify-center bg-floralWhite bg-center bg-cover">

      {/* <div className="culrav-Landing-background w-auto h-auto relative z-20 flex flex-col items-center justify-center "> */}
      {/* Base2 Image Section */}
      <div className="relative  flex flex-col justify-center items-center w-full h-auto ">
        {/* Red Background for Mobile View */}
        <div className="bg-scheduleOrange w-full h-full absolute top-0  sm:hidden "></div>

        {/* Original Background for Desktop */}
        <div
          className="w-full  md:mb-44 lg:md-32 custom1200:h-[85vh] sm:h-[65vh] md:h-[55vh] mb-[20%] custom1800:h-[50vh] bg-floralWhite absolute top-3 left-0 hidden sm:block"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 69%, 71% 83%, 25% 88%, 0% 72%)",
          }}
        >
        </div>
        <div
          className="w-full  custom1200:h-[85vh]  md:mb-44 lg:md-32 sm:h-[65vh] md:h-[55vh] mb-[20%] bg-scheduleOrange top-0 left-0 hidden sm:block"
          style={{
            clipPath:
              "polygon(0 0, 100% 0, 100% 69%, 71% 83%, 25% 88%, 0% 72%)",
          }}
        ></div>
        {/* Content: Rectangle and Paragraph */}
        <div className="sm:absolute w-[80%]  sm:top-[15%] md:top-[2%] lg:mt-10 xl:top-[2%] z-10 flex flex-col sm:flex-row items-center justify-center">
          {/* Rectangle Image */}
          <div
            className="w-[50vw] sm:w-[30vw] mt-[20%] sm:mt-0 md:w-[30%] lg:w-[40vw] h-full mb-4 sm:mb-0 sm:mr-4 md:pt-[15vh] xl:pt-[6vh]"
          >
            <img
              src={culravImage}
              alt="Rectangle Background"
              className="w-full h-full scale-[160%]"
            />
          </div>
          {/* Paragraph */}
          <p
            className="font-bebas p-[6%] pt-0 sm:p-0 sm:pl-[4%] w-screen sm:w-screen  h-auto text-floralWhite text-center text-[20px] sm:text-left  sm:text-[18px] md:text-[2.4vw] lg:text-[25px] xl:text-4xl md:pt-[15vh] xl:pt-[6vh] "
            style={{ wordSpacing: "0.3vw" }}
          >
            Culrav, a 4-day-long annual cultural extravaganza of MNNIT
            Allahabad, is a vibrant celebration of art, music, And creativity.
            With its diverse range of activities, including pronites featuring
            performances by renowned artists or bAnds, kavsAndhya highlighting
            poetry And literature, And appearances by comedians or big figures,
            Culrav offers entertainment And engagement for all attendees.
          </p>
        </div>
      </div>

      <div className="w-full h-full items-center justify-center flex flex-col mt-[10%] sm:-mt-[20vh]">
        <h1
          className="bg-[#F54E25] md:mb-0 mb-5 font-bionix text-[#FFFAF0] font-bold text-center  "
          style={{
            fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
            width: "clamp(150px, 30%, 300px)",
          }}
        >
          EVENTS
        </h1>

        <div className="grid grid-cols-1 w-[90%] xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 4k:grid-cols-5 gap-x-6 md:gap-x-10 lg:gap-x-20 justify-items-center items-center  h-full pb-[5%] p-[5%] -mt-[5vh]">
          {events.map((event, index) => (
            <div
              key={index}
              className="m-1 relative group flex flex-col items-center w-full h-[400px] sm:h-[450px] md:h-[450px] lg:h-[400px] xl:h-[400px] xl:w-[300px] overflow-hidden "
            >
              <EventCard roller={roller} event={event} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default CulravLanding;
