import { useNavigate } from "react-router-dom";

function EventCard({ roller, event }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(
      `/CulravEvents/${event.id}`
    );
  };
  return (
    <div className="relative sm:w-full w-[80%] h-full   flex flex-col justify-between overflow-hidden transition-transform duration-500 ease-out  ">
      {/* Roller Image (transition effect) */}
      <div className="absolute left-0 w-full h-full">
        <div
          className="absolute inset-0 bg-no-repeat bg-center transition-transform duration-500 ease-out transform translate-y-[30%] group-hover:-translate-y-0 z-0"
          style={{
            backgroundImage: `url(${roller})`,
            backgroundSize: "contain",
            height: "80%",
          }}
        />
      </div>


      <div className="absolute z-10 bottom-0 w-full h-[77%] overflow-hidden">
        <img
          src={event.BGImageLink}
          alt="Event"
          loading="lazy"
          className="w-full h-full object-fill"
        />
      </div>
      <div className="absolute z-20 bottom-0 w-full px-2 flex justify-center items-center h-[30%]">
        <div className="absolute bottom-0 left-0 w-full px-2 z-20 flex justify-center">

          <div className="absolute inset-0 bg-[#181818] transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
          <span
            className="relative font-bionix text-[#FFFAF0] text-center transform translate-x-[100%] group-hover:translate-x-0 transition-transform duration-500 opacity-0 group-hover:opacity-100 flex justify-center items-center h-full"
            style={{
              fontSize: "clamp(1rem, 5vw, 2rem)",
              width: "clamp(150px, 40%, 300px)", // Adjusted text scaling for custom breakpoints
            }}
          >
            <span
              className="hover:text-[#F54E25] hover:cursor-pointer group-hover:text-[2.5rem] transition-all duration-300"
              onClick={handleClick}
            >

              Explore
            </span>
          </span>
        </div>

      </div>

      {/* Add custom CSS for responsive behavior */}

    </div >
  );
}

export default EventCard;


