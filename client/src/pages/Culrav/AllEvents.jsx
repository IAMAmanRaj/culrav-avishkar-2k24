import EventCard from "@/Components/Culrav/EventCard";
import roller from "@/images/disc.png"; // Assuming roller image is imported
import cardBg from "@/images/image.png";
import EventCard2 from "@/Components/Culrav/EventCard2";
import { useParams } from "react-router-dom";
import events from "@/data/Event/culrav/events/culravData";
import { useEffect } from "react";
function CulravEvents() {
  // const data= useParams();
  // console.log(data)
  const { EventId } = useParams();
  console.log(EventId)
  const event = events.find(event => event.id === parseInt(EventId))


  return (
    <div className=" culrav-background relative z-20 flex flex-col items-center justify-center bg-floralWhite pt-[20%] sm:pt-[10%] md:pt-[10%] lg:pt-[8%] p-[8%]  bg-center bg-cover">
      <h1
        className="bg-[#F54E25] font-bionix text-[#FFFAF0] font-bold text-center  "
        style={{
          fontSize: "clamp(1.2rem, 3.5vw, 2.5rem)", // Responsive font size
          width: "clamp(150px, 30%, 300px)", // Responsive width
        }}
      >
        EVENTS
      </h1>

      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 4k:grid-cols-5 sm:gap-x-7 md:gap-x-[8vw] lg:gap-x-20 justify-items-center items-center w-full h-full">
        {event?.events.map((subEvent, index) => (
          <div
            key={index}
            className="m-1 relative group flex flex-col items-center w-full h-[400px] sm:h-[450px] md:h-[450px] lg:h-[320px] xl:h-[400px] xl:w-[300px] overflow-hidden"
          >
            <EventCard2 roller={roller} event={subEvent} mainevent={event} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CulravEvents;
