/* eslint-disable react/no-unknown-property */

const HorizontalRoller = () => {
    return (
      <div id="roller-container" className="bg-slate-400 text-[8vw] md:text-[4.3vw] lg:text-[3.4vw] xl:text-[2.8vw] cursor-pointer absolute bottom-0 z-30">
        <div id="roller-scroller" className="flex gap-[2vw] md:gap-[1.5vw]">
          <div className="roller-in flex gap-[2vw] md:gap-[1.5vw]">
            <h4>TechnoCultural Fest of MNNIT</h4>
            <h4>TechnoCultural Fest of MNNIT</h4>
            <h4>TechnoCultural Fest of MNNIT</h4>
            <h4>TechnoCultural Fest of MNNIT</h4>
          </div>
          <div className="roller-in flex gap-[2vw] md:gap-[1.5vw]">
            <h4>TechnoCultural Fest of MNNIT</h4>
            <h4>TechnoCultural Fest of MNNIT</h4>
            <h4>TechnoCultural Fest of MNNIT</h4>
            <h4>TechnoCultural Fest of MNNIT</h4>
          </div>
        </div>
        <style jsx>{`
          #roller-scroller {
            background-color: #F54E25;
            white-space: nowrap;
            overflow: hidden;
            position: relative;
            height: auto;
          }
  
          #roller-scroller::-webkit-scrollbar {
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
  
          .roller-in {
            display: flex;
            white-space: nowrap;
            animation: scroll 28s linear infinite;
            will-change: transform;
          }
  
          .roller-in:nth-child(2) {
            position: relative;
            top: 0;
          }
  
          #roller-scroller h4 {
            display: inline-block;
            color: #ffffff;
            font-weight: 900;
            margin-right: 3vw;
          }
  
          @media (min-width: 1024px) {
            #roller-scroller h4 {
              margin-right: 1.5vw;
            }
          }
        `}</style>
      </div>
    );
  };
  
  export default HorizontalRoller;
  