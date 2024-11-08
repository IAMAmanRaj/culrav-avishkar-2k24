import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel } from 'react-responsive-carousel';  
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

// importing images 
import Roll from "../../assets/Home/Gallery/Roll.png"
import test from "../../assets/Home/Gallery/test.jpg"
import backg from "../../assets/Home/Gallery/gallerybg.webp"
gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const reelRef2 = useRef(null);

  useEffect(() => {
    const reel2 = reelRef2.current;
  
    ScrollTrigger.matchMedia({
      "(max-width: 3000px)": function() {
        gsap.from(reel2, {
          x: "-200%", 
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: reel2,
            start: "top top+=200",
            end: "+=2000",
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
    <div id="gallery-section">

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

      <div className="hidden md:block w-full md:h-[2620px] xl:h-[2700px] pt-40 relative bottom-16 bg-floralWhite overflow-hidden"
  style={{ backgroundImage: `url(${backg})` }}>
        <div className="w-full flex justify-center">
          <h1 className="font-bionix text-scheduleOrange text-[6vh]">GALLERY</h1>
        </div>
  <div className="w-full relative top-[100px] flex items-center custom" ref={reelRef2}>
    <div className="w-full relative md:h-[300px] xl:h-[350]">
      <img className="w-full md:h-[300px] xl:h-[350] relative top-[0px]" src={Roll} alt="Reel Image 5" />
      <div className="relative bottom-[255px] xl:bottom-[255px] flex items-center gap-3 px-4 transform w-[9000px] h-[216px] xl:h-[216px] bg-reelColor">
        <img className="h-[90%] border-0 md:rounded-[16px]" src={test} alt="Gallery Image 4" />
        <img className="h-[90%] border-0 md:rounded-[16px]" src={test} alt="Gallery Image 5" />
      </div>
    </div>
    <img className="w-full md:h-[300px] xl:h-[350] relative" src={Roll} alt="Reel Image 6" />
    <img className="w-full md:h-[300px] xl:h-[350] relative" src={Roll} alt="Reel Image 7" />
    <img className="w-full md:h-[300px] xl:h-[350] relative" src={Roll} alt="Reel Image 8" />
    <img className="w-full md:h-[300px] xl:h-[350] relative" src={Roll} alt="Reel Image 9" />
  </div>
</div>

    </div >
  );
};

export default Gallery;
