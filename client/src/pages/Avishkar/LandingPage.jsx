
import MainEvent from "@/Components/Avishkar/MainEventCard";
import EventCard from "@/Components/Culrav/EventCard";
import aviskharbg from '@/images/aviskar-bg.png';
import base2 from '@/images/base2.png';
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
        <div
            className="flex flex-col items-center justify-center bg-[#202020] "
            style={{ backgroundImage: `url(${aviskharbg})` }}
        >
            {/* Base2 Image Section */}
            <div className="relative flex flex-col justify-center items-center w-full  h-screen md:h-[80vh]">
                {/* Base2 background for desktop */}
                <img
                    src={base2}
                    alt="Base Background"
                    className="absolute inset-0 top-0 w-full h-full object-fill bg-fixed z-0 hidden sm:block" // Hidden on small screens, object-cover for larger screens
                />
                
                {/* Mobile base2 background */}
                <div
                    className="absolute  bg-[#F54E25]  w-screen h-auto min-h-full z-0 block sm:hidden"
                />


                {/* Content: Rectangle and Paragraph */}
                <div className="relative z-10 flex flex-col sm:flex-row items-center justify-center px-4">
                    {/* Rectangle Image */}
                    <img
                        src={rectangle}
                        alt="Rectangle Background"
                        className="w-full max-w-[200px] sm:max-w-[30%] sm:w-auto h-auto mb-4 sm:mb-0 sm:mr-4"
                    />

                    {/* Paragraph */}
                    <p className="font-bebas text-white space-y-[10px] text-center sm:text-left p-4"
                        style={{
                            fontSize: 'clamp(1.5rem, 2vw, 2rem)', // Responsive font size
                            lineHeight: '1.4',
                            maxWidth: '500px',
                        }}
                    >
                        Avishkar, a 3-day-long annual Techno-Management Fest of MNNIT Allahabad is an array of mind-boggling events. It aims to nurture the budding talents of the nation, providing a platform for young engineers and managers to hone their techno-managerial skills.
                    </p>
                </div>
            </div>

            {/* Events Section */}
            <div className="w-full h-auto p-10 items-center justify-center flex flex-col">
                <h1
                    className="bg-[#F54E25] font-bionix text-[#FFFAF0] font-bold text-center p-4 mb-8"
                    style={{
                        fontSize: 'clamp(1.5rem, 4vw, 3rem)',
                        width: 'clamp(200px, 30%, 400px)',
                    }}
                >
                    EVENTS
                </h1>

                <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 4k:grid-cols-5 gap-6 md:gap-10 lg:gap-20 justify-items-center items-center w-full h-full">
                {events.map((event, index) => (
                    <div key={index} className="relative group flex flex-col items-center w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[550px] overflow-hidden">
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
