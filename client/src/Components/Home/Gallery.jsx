import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel } from 'react-responsive-carousel';  
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

// importing images 
import Roll from "../../assets/Home/Gallery/Roll.png"
import test from "../../assets/Home/Gallery/test.jpg"
import tiltedRoll from "../../assets/Home/Gallery/tiltedRoll.png"
gsap.registerPlugin(ScrollTrigger);
const Gallery = () => {
  const reelRef1 = useRef(null);
  const reelRef2 = useRef(null);
  useEffect(() => {
    const reel1 = reelRef1.current;
    const reel2 = reelRef2.current;
  
    ScrollTrigger.matchMedia({
      
      "(max-width: 1024px)": function() {
        gsap.to(reel1, {
          x: "-200%",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: reel1,
            start: "bottom bottom-=300",
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
      // Larger screens
      "(min-width: 1024px)": function() {
        gsap.to(reel1, {
          x: "-100%",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: reel1,
            start: "top top+=200", 
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
            start: "bottom bottom-=200",
            end: "+=1100",
            scrub: true,
            pin: true,
            anticipatePin: 1,
          },
        });
      }
    });
  
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  
  return (
    <>
    <div className="md:hidden py-8 relative -top-8 bg-floralWhite h-auto flex flex-col gap-12">
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
          showArrows={false}
          stopOnHover={false} 
          interval={4000} 
          transitionTime={800}
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
      <div className="hidden md:block py-[10vw] w-[100vw] md:h-[520vw] custom1000:h-[420vw] custom1300:h-[340vw] custom1560:h-[310vw] custom1840:h-[300vw] custom1980:h-[260vw]  relative bottom-16 bg-floralWhite overflow-hidden">
        <div className="w-full md:h-[40vw]  relative top-16 flex items-center" ref={reelRef1}>
          <div className="w-full relative md:h-[51vw] ">
            <img className="w-full md:h-[51vw] custom1300:h-[29vw] " src={tiltedRoll} alt="Reel Image 1" />
            <div className="relative flex md:gap-3 items-center bottom-[32vw] px-4 transform custom1300:h-[17vw] custom1300:bottom-[17.86vw] custom1300:rotate-[2deg] left-[-7px]  md:rotate-[3.6deg] z-20 w-[400vw] h-[31vw] bg-reelColor">
              <img className="h-[90%]  border-0 md:rounded-[16px]" src={test} alt="Gallery Image 1" />
              <img className="h-[90%]  border-0 md:rounded-[16px]" src={test} alt="Gallery Image 2" />
              <img className="h-[90%]  border-0 md:rounded-[16px]" src={test} alt="Gallery Image 3" />
            </div>
          </div>
          <img className="w-full md:h-[51vw] custom1300:h-[29vw] relative md:top-[6.153vw] custom1300:top-[-7.46vw]" src={tiltedRoll} alt="Reel Image 2" />
          <img className="w-full md:h-[51vw] custom1300:h-[29vw] relative md:top-[12.4vw] custom1300:top-[-4vw]" src={tiltedRoll} alt="Reel Image 3" />
          <img className="w-full md:h-[51vw] custom1300:h-[29vw] relative md:top-[9.5rem]" src={tiltedRoll} alt="Reel Image 4" />
        </div>
        <div className="w-full h-16 flex justify-center relative top-[23vh]">
          <h1 className="font-bionix text-scheduleOrange text-[6vh]">GALLERY</h1>
        </div>
        <div className="w-full md:h-[41vw] custom1300:h-[27vw] relative top-[27vh] flex items-center" ref={reelRef2}>
          <div className="w-full relative md:h-[41vw]"> 
            <img className="w-full md:h-[41vw] custom1300:h-[27vw] custom1300:top-[7vw] relative top-[0vw] " src={Roll} alt="Reel Image 5" />
            <div className="relative bottom-[35vw] custom1300:bottom-[16vw] flex items-center  md:gap-3 px-4 transform w-[370vw] h-[29.7vw] custom1300:h-[19.4vw] bg-reelColor">
                <img className="h-[90%] border-0 md:rounded-[16px]" src={test} alt="Gallery Image 4" />
                <img className="h-[90%] border-0 md:rounded-[16px]" src={test} alt="Gallery Image 5" />
            </div>
          </div>
          <img className="w-full md:h-[41vw] custom1300:h-[27vw] relative" src={Roll} alt="Reel Image 6" />
          <img className="w-full md:h-[41vw] custom1300:h-[27vw] relative" src={Roll} alt="Reel Image 7" />
          <img className="w-full md:h-[41vw] custom1300:h-[27vw] relative" src={Roll} alt="Reel Image 8" />
        </div>
      </div>
    </>
  );
};
export default Gallery;