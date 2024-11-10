import { useNavigate } from "react-router-dom";
import avishkarBg from "@/images/hoveraviskhar.png";
import hoverImage from '@/images/hoveraviskhar.png';

function EventCard({ event }) {
  const navigate = useNavigate();
    const handleClick = () => {
      navigate(`/AvishkarEvents/${event.id}`);
    };
  return (
    <div className="hover:cursor-pointer relative md:w-full w-[80%] h-full flex flex-col justify-between overflow-hidden transition-transform duration-500 ease-out group">

      {/* Event Image */}
      <div className="absolute z-10 bottom-0 w-full h-full overflow-hidden">
        <img

          src={event.BGImageLink} // Default image
          alt="Event"
          loading="lazy"
          className="w-full h-full object-fill transition-opacity  duration-500 ease-in-out group-hover:opacity-0" // Fade out on hover
        />
        <img
          src={hoverImage} // Hover image
          alt="Event Hover"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-fill transition-opacity duration-500 ease-in-out opacity-0 group-hover:opacity-100" // Fade in on hover
        />
      </div>

      {/* Explore Sliding Section */}
      <div className="absolute z-30 bottom-0 w-full px-2 flex justify-center items-center h-[30%]">
        <div className="absolute bottom-0 left-0 w-full px-4 z-20 flex justify-center"> {/* Added flex justify-center */}
          {/* Sliding White Background */}
          <div className="absolute inset-0 bg-white transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          {/* Sliding Explore Text */}
          <span
            className="relative font-bionix text-black text-center transform translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center h-full">
            <span className="group-hover:text-[#F54E25] group-hover:text-[2.5rem] transition-all duration-300"
              onClick={handleClick}
              style={{
                fontSize: 'clamp(1.2rem, 6vw, 2.5rem)',
                width: 'clamp(250px, 40%, 400px)', // Adjusted text scaling for custom breakpoints
              }}
            > {/* Inner span for hover effects */}
              Explore
            </span>
          </span>
        </div>
        
      </div>
    </div>
  );
};


export default EventCard;
