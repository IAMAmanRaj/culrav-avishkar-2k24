import { useEffect } from "react";
import EventCard from "@/Components/Avishkar/EventCard";
import MainEvent from "@/Components/Avishkar/MainEventCard";
import aviskarbg from '@/images/aviskar-bg.png';
import cardBg from '@/images/imageavishkar.png';
import avishkarImage from "@/assets/Home/avishkar.webp";
import AvishkarAllEvents from "@/data/Event/avishkar/events/AvishkarAllEvents";

function AvishkarLanding() {

    const mainevent = MainEvent;
    const events = AvishkarAllEvents;
    console.log(events);


    return (
        <div className=" culrav-Landing-background w-auto h-auto relative z-20 flex flex-col items-center justify-center bg-floralWhite bg-center bg-cover">

            {/* <div className="culrav-Landing-background w-auto h-auto relative z-20 flex flex-col items-center justify-center "> */}
            {/* Base2 Image Section */}
            <div className="relative flex flex-col justify-center items-center w-full h-auto ">
                {/* Red Background for Mobile View */}
                <div className="bg-scheduleOrange w-full h-full absolute top-0  sm:hidden "></div>

                {/* Original Background for Desktop */}
                <div
                    className="w-full  md:mb-20 custom1200:h-[90vh] sm:h-[65vh] md:h-[55vh] mb-[10%] custom1800:h-[50vh] bg-floralWhite absolute top-3 left-0 hidden sm:block"
                    style={{
                        clipPath:
                            "polygon(100% 0, 100% 61%, 80% 72%, 40% 65%, 20% 72%, 0 62%, 0 0)",
                    }}
                >
                </div>
                <div
                    className="w-full  custom1200:h-[90vh]  md:mb-20 sm:h-[65vh] md:h-[55vh] mb-[10%] bg-scheduleOrange top-0 left-0 hidden sm:block"
                    style={{
                        clipPath:
                            "polygon(100% 0, 100% 61%, 80% 72%, 40% 65%, 20% 72%, 0 62%, 0 0)",
                    }}
                ></div>
                {/* Content: Rectangle and Paragraph */}
                <div className="sm:absolute w-[80%] sm:top-24 md:top-[2%] xl:top-[2%]  z-10 flex flex-col sm:flex-row items-center justify-center">
                    {/* Rectangle Image */}
                    <div
                        className="w-[50vw] md:mt-24 lg:mt-10 sm:w-[30vw] mt-[10%] sm:mt-0 md:w-[30vw] lg:w-[40vw] h-full  sm:mb-0 sm:mr-4 xl:pt-[6vh]"
                    >
                        <img
                            src={avishkarImage}
                            alt="Rectangle Background"
                            className="w-full h-full scale-[150%] sm:scale-[200%] lg:scale-[160%]"
                        />
                    </div>
                    {/* Paragraph */}
                    <p
                        className="font-bebas p-[6%] pt-0 sm:p-0 sm:pl-[4%] w-screen sm:w-screen  h-auto text-floralWhite text-center text-[20px] sm:text-left  sm:text-[18px] md:text-[2.4vw] lg:text-[25px] xl:text-4xl md:pt-[15vh] xl:pt-[6vh] "
                        style={{ wordSpacing: "0.3vw" }}
                    >
                        Avishkar, a 3-day-long annual Techno-Management Fest of MNNIT Allahabad is an array of mind boggling events, the festival aims to nurture the budding talents of the nation. It provides a platform to the young engineers and managers to hone their techno-managerial skills on a much-branded-canvas.

                    </p>
                </div>
            </div>

            <div className="w-full h-full items-center justify-center flex flex-col mt-[10%] sm:-mt-[20vh]">
                <h1
                    className="bg-[#F54E25] md:mb-10 mb-20 font-bionix text-[#FFFAF0] font-bold text-center  "
                    style={{
                        fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
                        width: "clamp(150px, 30%, 300px)",
                    }}
                >
                    EVENTS
                </h1>

                <div className="grid grid-cols-1 w-[90%] xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 4k:grid-cols-5 gap-x-6 md:gap-x-10 lg:gap-x-20 justify-items-center items-center  h-full  p-[5%] -mt-[5vh]">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="mb-5 md:mb-20 m-1 relative group flex flex-col items-center w-[300px] h-[300px] overflow-hidden "
                        >
                            <EventCard event={event} />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default AvishkarLanding;



