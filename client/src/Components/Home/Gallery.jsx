import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel } from 'react-responsive-carousel';  
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

// importing images 
import Roll from "../../assets/Home/Gallery/Roll.png"
import test from "../../assets/Home/Gallery/test.jpg"
import tiltedRoll from "../../assets/Home/Gallery/tiltedRoll.png"
import backg from "../../assets/Home/Gallery/gallerybg.webp"
gsap.registerPlugin(ScrollTrigger);
const Gallery = () => {
  const reelRef1 = useRef(null);
  const reelRef2 = useRef(null);
  useEffect(() => {
    const reel1 = reelRef1.current;
    const reel2 = reelRef2.current;
  
    ScrollTrigger.matchMedia({
      
      "(max-width: 3000px)": function() {
        gsap.to(reel1, {
          x: "-200%",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: reel1,
            start: "top top+=80",
            end: "+=2000",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });
  
        gsap.from(reel2, {
          x: "-200%", 
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: reel2,
            start: "bottom bottom-=150",
            end: "+=1300",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });
      },

    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <>
<div className="md:hidden py-8 relative -top-8 bg-floralWhite h-screen flex flex-col gap-12 overflow-y-auto">
  <div className="w-full flex justify-center">
    <h1 className="font-bionix text-scheduleOrange text-[6vh]">GALLERY</h1>
  </div>

  <div className="w-[100vw] h-[60vh] relative">
    <Carousel
      className="slider"
      autoPlay
      infiniteLoop
      showThumbs={false}        
      showStatus={false}        
      showArrows={true}         
      stopOnHover={false}
      interval={4000}
      transitionTime={800}
      swipeable={false}         
    >
      <div className="w-[100vw] h-[60vh] flex items-center justify-center bg-gray-900">
        <img
          src={test}
          alt="Image 1"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-8 text-white text-xl bg-black bg-opacity-50 px-4 py-2 rounded-md">
          Beautiful Scene 1
        </div>
      </div>
      <div className="w-[100vw] h-[60vh] flex items-center justify-center bg-gray-900">
        <img
          src={test}
          alt="Image 2"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-8 text-white text-xl bg-black bg-opacity-50 px-4 py-2 rounded-md">
          Beautiful Scene 2
        </div>
      </div>
      <div className="w-[100vw] h-[60vh] flex items-center justify-center bg-gray-900">
        <img
          src={test}
          alt="Image 3"
          className="object-cover w-full h-full"
        />
        <div className="absolute bottom-8 text-white text-xl bg-black bg-opacity-50 px-4 py-2 rounded-md">
          Beautiful Scene 3
        </div>
      </div>
    </Carousel>
  </div>
</div>

      <div className="hidden md:block py-[10vw] w-full md:h-[530vw] custom800:h-[510vw] custom880:h-[478vw] custom930:h-[460vw] custom1000:h-[410vw] custom1050:h-[397vw] custom1110:h-[380vw] custom1150:h-[370vw] custom1200:h-[355vw] custom1240:h-[345vw] custom1300:h-[330vw] custom1350:h-[318vw] custom1400:h-[300vw] custom1450:h-[290vw] custom1500:h-[260vw] custom1560:h-[240vw]  relative bottom-16 bg-floralWhite overflow-hidden"
      style={{ backgroundImage: `url(${backg})` }}>
        <div className="w-full relative top-16 flex items-center" ref={reelRef1}>
          <div className="w-full relative md:h-[40vw] custom1000:h-[28vw] custom1300:h-[22.5vw] ">
            <img className="w-full md:h-[40vw] custom1000:h-[28vw] custom1300:h-[22vw]  " src={tiltedRoll} alt="Reel Image 1" />
            <div className="relative flex md:gap-3 items-center bottom-[25.4vw] px-4 transform custom1000:h-[16.8vw] custom1000:rotate-[2.2deg] custom1000:bottom-[16.9vw] custom1300:h-[13.6vw] custom1300:rotate-[2.06deg] custom1300:bottom-[12.46vw]  left-[-7px]  md:rotate-[2.84deg]  z-20 w-[400vw] h-[24.2vw] bg-reelColor">
              <img className="h-[90%]  border-0 md:rounded-[16px]" src={test} alt="Gallery Image 1" />
              <img className="h-[90%]  border-0 md:rounded-[16px]" src={test} alt="Gallery Image 2" />
              <img className="h-[90%]  border-0 md:rounded-[16px]" src={test} alt="Gallery Image 3" />
            </div>
          </div>
          <img className="w-full md:h-[40vw] custom1000:top-[3.426vw] custom1000:h-[28vw] custom1300:h-[22vw] custom1300:top-[2.42vw]  relative md:top-[4.86vw] " src={tiltedRoll} alt="Reel Image 2" />
          <img className="w-full md:h-[40vw] custom1000:top-[6.86vw] custom1000:h-[28vw] custom1300:h-[22vw] custom1300:top-[5.36vw]  relative md:top-[9.7vw]" src={tiltedRoll} alt="Reel Image 3" />
          <img className="w-full md:h-[40vw] custom1000:top-[10.2vw] custom1000:h-[28vw] custom1300:h-[22vw] custom1300:top-[8vw]  relative md:top-[9.5rem]" src={tiltedRoll} alt="Reel Image 4" />
        </div>
        <div className="w-full h-16 flex justify-center relative top-[23vh]">
          <h1 className="font-bionix text-scheduleOrange text-[6vh]">GALLERY</h1>
        </div>
        <div className="w-full md:h-[28vw]  custom1000:h-[23vw] custom1300:top-[32vh] custom1300:h-[15vw] relative top-[27vh] flex items-center" ref={reelRef2}>
          <div className="w-full relative md:h-[28vw] custom1300:h-[15vw]"> 
            <img className="w-full md:h-[28vw]  custom1000:h-[23vw]  custom1300:h-[15vw] relative top-[0vw] " src={Roll} alt="Reel Image 5" />
            <div className="relative bottom-[23.7vw] custom1000:h-[16vw] custom1000:bottom-[19.5vw] flex items-center  md:gap-3 px-4 transform w-[370vw] h-[19.7vw] custom1300:h-[10.4vw] custom1300:bottom-[12.7vw]   bg-reelColor">
                <img className="h-[90%] border-0 md:rounded-[16px]" src={test} alt="Gallery Image 4" />
                <img className="h-[90%] border-0 md:rounded-[16px]" src={test} alt="Gallery Image 5" />
            </div>
          </div>
          <img className="w-full md:h-[28vw]  custom1000:top-[-2.58vw] custom1000:h-[23vw] custom1300:h-[15vw] custom1300:top-[0vw] relative" src={Roll} alt="Reel Image 6" />
          <img className="w-full md:h-[28vw]  custom1000:top-[-2.58vw] custom1000:h-[23vw] custom1300:h-[15vw] custom1300:top-[0vw] relative" src={Roll} alt="Reel Image 7" />
          <img className="w-full md:h-[28vw]  custom1000:top-[-2.58vw] custom1000:h-[23vw] custom1300:h-[15vw] custom1300:top-[0vw] relative" src={Roll} alt="Reel Image 8" />
          <img className="w-full md:h-[28vw]  custom1000:top-[-2.58vw] custom1000:h-[23vw] custom1300:h-[15vw] custom1300:top-[0vw]  relative" src={Roll} alt="Reel Image 8" />
        </div>
      </div>
    </>
  );
};
export default Gallery;