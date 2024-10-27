import EventCard from '@/Components/Culrav/EventCard';
import culravbg from '@/images/culrav-bg.jpg';
import roller from '@/images/disc.png'; // Assuming roller image is imported
import grid from '@/images/gridfull.png';
import cardBg from '@/images/image.png';
import noise from '@/images/noiseEffect.png';
function CulravEvents() {
    const events = Array(9).fill({
        image: cardBg,
        title: "", // Add actual event titles as needed
    });

    return (
        <div
            className="flex flex-col justify-center items-center pt-[20%] p-10 bg-center bg-cover"
            style={{ backgroundImage: `url(${grid}), url(${culravbg}),url(${noise})`,
                backgroundRepeat: "repeat, no-repeat,repeat",  // Repeat grid, no-repeat for culravbg
                backgroundPosition: "center, center,center",  // Center both images
                backgroundSize: "contain, cover,contain", }}
                >
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
                        <EventCard roller={roller} event={event}/>
                        
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CulravEvents;
