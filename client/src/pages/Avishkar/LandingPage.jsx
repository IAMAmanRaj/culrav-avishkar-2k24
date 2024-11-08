
import EventCard from "@/Components/Avishkar/EventCard";
import MainEvent from "@/Components/Avishkar/MainEventCard";
import aviskarbg from '@/images/aviskar-bg.png';
import hoverimage from '@/images/hoveraviskhar.png';
import cardBg from '@/images/imageavishkar.png';
import rectangle from '@/images/Rectangle.png';
function AvishkarLanding() {
    const mainevent = MainEvent;
    const events = Array(9).fill({
        image: cardBg,
        hoverImage: hoverimage,
        title: "", // Add actual event titles as needed
    });

    return (
         <div className="flex flex-col relative z-20 items-center justify-center min-h-screen w-full bg-[#181818] "
            style={{
                backgroundImage: `url(${aviskarbg})`,
                
            }}>
            {/* <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#181818] "
            style={{
                backgroundImage: `url(${aviskarbg})`,
                
            }}></div> */}
            
            
            <div className="relative flex flex-col justify-center items-center w-full min-h-screen md:h-[80vh]">
                {/* Red Background for Mobile View */}
                <div className="bg-scheduleOrange w-screen h-[90%] absolute top-0  sm:hidden "></div>

                {/* Original Background for Desktop */}
                <div 
                    className="w-full h-full bg-floralWhite absolute top-3 left-0 hidden sm:block "
                    style={{
                        clipPath: 'polygon(100% 0, 100% 61%, 80% 72%, 40% 65%, 20% 72%, 0 62%, 0 0)',
                    }}
                ></div>
                <div 
                    className="w-full h-full bg-scheduleOrange absolute top-0 left-0 hidden sm:block "
                    style={{
                        clipPath: 'polygon(100% 0, 100% 61%, 80% 72%, 40% 65%, 20% 72%, 0 62%, 0 0)',
                    }}
                ></div>

                {/* Content: Rectangle and Paragraph */}
                <div className="absolute w-[80%]  top-[20%] sm:top-[22%] md:top-[5%] xl:top-[10%] z-10 flex flex-col sm:flex-row items-center justify-center">
                    {/* Rectangle Image */}
                    <img
                        src={rectangle}
                        alt="Rectangle Background"
                        className="w-[50vw] sm:w-[30vw] md:w-[30%] lg:w-[20vw] h-full mb-4 sm:mb-0 sm:mr-4 md:pt-[15vh] xl:pt-[6vh]"
                    />

                    {/* Paragraph */}
                    <p className="font-bebas p-[10%] pt-0 sm:p-0 sm:pl-[5%] w-screen sm:w-screen h-auto text-floralWhite text-center text-[19px] sm:text-left  sm:text-[18px] md:text-[2.5vw] lg:text-3xl xl:text-4xl md:pt-[15vh] xl:pt-[6vh] "
                    style={{ wordSpacing: '0.4vw' }}>
                        Avishkar, a 3-day-long annual Techno-Management Fest of MNNIT Allahabad is an array of mind boggling events, the festival aims to nurture the budding talents of the nation. It provides a platform to the young engineers and managers to hone their techno-managerial skills on a much-branded-canvas.
                    </p>
                </div>
            </div>

            {/* Events Section */}
            <div className="w-[90%] h-full items-center justify-center flex flex-col  sm:-mt-[20vh]">
                <h1
                    className="bg-[#F54E25] font-bionix text-[#FFFAF0] font-bold text-center mb-8"
                    style={{
                        fontSize: 'clamp(1.2rem, 3.5vw, 2.5rem)',
                        width: 'clamp(150px, 30%, 300px)',
                    }}
                >
                    EVENTS
                </h1>

                <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 4k:grid-cols-5 gap-6 space md:gap-10 lg:gap-20 justify-items-center items-center w-full h-full p-[2%] pb-[7%]">
                {events.map((event, index) => (
                    <div key={index} className="relative group flex flex-col items-center w-[90%] h-[300px] sm:h-[300px] md:h-[300px] lg:h-[350px] lg:w-[320px] p-[5%]  overflow-hidden">
                        {/* Card Container */}
                        <EventCard  event={event} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    );
}

export default AvishkarLanding;
