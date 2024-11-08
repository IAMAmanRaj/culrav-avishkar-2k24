import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Roll from "../../assets/Home/Gallery/Roll.png";
import backg from "../../assets/Home/Gallery/gallerybg.webp";
import img1 from "../../assets/Home/Gallery/DSC_0010.webp";
import img2 from "../../assets/Home/Gallery/DSC_0078.webp";
import img3 from "../../assets/Home/Gallery/DSC_0111.webp";
import img4 from "../../assets/Home/Gallery/DSC_0142.webp";
import img5 from "../../assets/Home/Gallery/DSC_0160.webp";
import img6 from "../../assets/Home/Gallery/DSC_0219.webp";
import img7 from "../../assets/Home/Gallery/DSC_0230.webp";
import img8 from "../../assets/Home/Gallery/DSC_0380.webp";
import img9 from "../../assets/Home/Gallery/DSC_0454.webp";
import img10 from "../../assets/Home/Gallery/DSC_0455.webp";
import img11 from "../../assets/Home/Gallery/DSC_0747.webp";
import img12 from "../../assets/Home/Gallery/DSC_0923.webp";
import img13 from "../../assets/Home/Gallery/DSC_0955.webp";
import img14 from "../../assets/Home/Gallery/DSC_1008.webp";
import img15 from "../../assets/Home/Gallery/DSC_1455.webp";
import img16 from "../../assets/Home/Gallery/DSC_1539.webp";
import img17 from "../../assets/Home/Gallery/DSC_6241.webp";
import img18 from "../../assets/Home/Gallery/DSC_6285.webp";
import img19 from "../../assets/Home/Gallery/IMG_5918.webp";

gsap.registerPlugin(ScrollTrigger);

const Gallery = () => {
  const reelRef2 = useRef(null);

  useEffect(() => {
    const reel2 = reelRef2.current;

    ScrollTrigger.matchMedia({
      "(min-width: 1501px)": function() {
        gsap.from(reel2, {
          x: "-150%",
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
      "(min-width: 1201px) and (max-width: 1500px)": function() {
        gsap.from(reel2, {
          x: "-279%",
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
      "(min-width: 900px) and (max-width: 1200px)": function() {
        gsap.from(reel2, {
          x: "-410%",
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
      "(min-width: 600px) and (max-width: 899px)": function() {
        gsap.from(reel2, {
          x: "-480%",
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: reel2,
            start: "top top+=100",
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

  const images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18, img19,
  ];

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
      {images.map((image, index) => (
        <div key={index} className="w-[100vw] h-[60vh] flex items-center justify-center bg-gray-900">
          <img src={image} alt={`Image ${index + 1}`} className="object-contain max-w-full max-h-full" />
        </div>
      ))}
    </Carousel>
  </div>
</div>

      <div
        className="hidden md:block w-full md:h-[2620px] xl:h-[2700px] pt-40 relative bottom-16 bg-floralWhite overflow-hidden"
        style={{ backgroundImage: `url(${backg})` }}
      >
        <div className="w-full flex justify-center">
          <h1 className="font-bionix text-scheduleOrange text-[6vh]">GALLERY</h1>
        </div>
        <div className="w-full relative top-[100px] flex items-center custom" ref={reelRef2}>
          <div className="w-full relative md:h-[300px] xl:h-[350]">
            <img className="w-full md:h-[300px] xl:h-[350] relative top-[0px]" src={Roll} alt="Reel" />
            <div className="relative bottom-[255px] xl:bottom-[255px] flex items-center gap-5 px-5 transform w-[9000px] h-[216px] xl:h-[216px] bg-reelColor">
              {images.map((image, index) => (
                <img key={index} className="h-[90%] border-0 z-30 md:rounded-[16px]" src={image} alt={`Gallery Image ${index + 1}`} />
              ))}
            </div>
          </div>
          {[...Array(6)].map((_, index) => (
            <img key={index} className="w-full md:h-[300px] xl:h-[350]" src={Roll} alt={`Reel Image ${index + 6}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
