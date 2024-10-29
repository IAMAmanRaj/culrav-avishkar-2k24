/* eslint-disable react/no-unknown-property */

const BlackRoller = () => {
    return (
      <div id="page2" className="bg-black relative z-40 text-[8vw] md:text-[4.3vw] lg:text-[3.4vw] xl:text-[2.8vw] cursor-pointer transform rotate-2 top-[-30px]">
        <div id="scroller" className="flex font-bionix gap-[2vw] md:gap-[1.5vw]">
          <div className="scroller-in flex gap-[2vw] md:gap-[1.5vw]">
            <h4>TechnoCultural Fest of MNNIT</h4>
            <h4>TechnoCultural Fest of MNNIT</h4>
            <h4>TechnoCultural Fest of MNNIT</h4>
            <h4>TechnoCultural Fest of MNNIT</h4>
          </div>
          <div className="scroller-in flex gap-[2vw] md:gap-[1.5vw]">
            <h4>TechnoCultural Fest of MNNIT</h4>
            <h4>TechnoCultural Fest of MNNIT</h4>
            <h4>TechnoCultural Fest of MNNIT</h4>
            <h4>TechnoCultural Fest of MNNIT</h4>

          </div>
        </div>
        <style jsx>{`
          #scroller {
            background-color: #1c1c1c;
            white-space: nowrap;
            overflow: hidden;
            position: relative;
            height: auto;
          }
  
          #scroller::-webkit-scrollbar {
            display: none;
          }
  
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
  
          .scroller-in {
            display: flex;
            white-space: nowrap;
            animation: scroll 28s linear infinite;
            will-change: transform; 
          }
  
          .scroller-in:nth-child(2) {
            position: relative;
            top: 0;
          }
  
          #scroller h4 {
            display: inline-block;
            color: #ffffff;
            font-weight: 900;
            margin-right: 3vw; /* Adjusts margin for responsive spacing */
          }
  
          @media (min-width: 1024px) {
            #scroller h4 {
              margin-right: 1.5vw; /* Decrease margin on larger screens */
            }
          }
        `}</style>
      </div>
    );
  };
  
export default BlackRoller;
  