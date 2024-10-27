import EventCard from '@/Components/Avishkar/EventCard';
import aviskharbg from '@/images/aviskar-bg.png';
import hoverimage from '@/images/hoveraviskhar.png';
import cardBg from '@/images/imageavishkar.png';
function AvishkarEvents() {
    const events = Array(9).fill({
        image: cardBg,
        hoverImage: hoverimage,
        title: "", // Add actual event titles as needed
    });

    return (
        
           <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[#FFF2D5] px-4 sm:px-6 lg:px-8  pt-[20%]"
           style={{ backgroundImage: `url(${aviskharbg})` }}>
             
            <h1 
                className="bg-[#F54E25] font-bionix text-[#FFFAF0] font-bold text-center p-4 mb-8"
                style={{
                    fontSize: 'clamp(1.5rem, 4vw, 3rem)', // Responsive font size
                    width: 'clamp(200px, 30%, 400px)', // Responsive width
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
            
    );
}

export default AvishkarEvents;