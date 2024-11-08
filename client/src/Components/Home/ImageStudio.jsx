import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/ShadCnComponents/ui/ImageSliderStudio";
  
  const carouselStyles = {
    carousel: "w-screen overflow-x-hidden bg-black pt-20 pb-4 pl-8 lg:pl-24 xl:pl-48 relative",
    shadowOverlayDiv:
      "absolute h-full w-full left-0 top-0 bg-peopleGradientBg bg-no-repeat",
    carouselItem: "basis-[unset]",
    imageParent: "h-[80%] overflow-hidden",
    image: "h-full object-cover xl:hover:scale-110 xl:transform duration-1000",
    category:
      "uppercase font-medium mt-1 text-[8px] flex items-center text-[#DA6016] gap-1 pl-1",
    categoryDot: "h-[6px] w-[6px] bg-[#DA6016]",
    title:
      "uppercase text-[#9F9F9F] inter pl-1 xl:text-black xl:font-[400] xl:text-2xl",
    description:
      "text-[8px] text-[#545454] pl-1 xl:text-black xl:text-[12px] font-[400] inter",
    parentDiv: "parentdiv h-full w-full flex flex-col",
  };
  
  const carouselItems = [
    "object-cover w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    " object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[400px] sm:w-[300px] sm:h-[500px] xl:h-[700px] xl:w-[400px] pl-[3px]",
    "object-cover  w-[200px] h-[220px] sm:w-[300px] sm:h-[320px] xl:h-[340px] xl:w-[400px] pl-[3px]",


  ];
  
  const carouselImages = [
    "/images/img1.webp",
    "/images/img3.webp",
    "/images/img13.webp",
    "/images/img17.webp",
    "/images/img16.webp",
    "/images/img14.webp",
    "/images/img19.webp",
    "/images/img20.webp",
    "/images/img21.webp",
    "/images/img22.webp",
    "/images/img23.webp",
    "/images/img24.webp",
    "/images/img28.webp",
    "/images/img29.webp",
    "/images/img30.webp",
    "/images/img31.webp",
    "/images/img32.webp",
    "/images/img33.webp",
    "/images/img34.webp",
    "/images/img36.webp",
    "/images/img39.webp",
    "/images/img43.webp",
    "/images/img48.webp",
    "/images/img49.webp",
    "/images/img.webp",
    "/images/img6.webp",
  ];
  
  const ImageStudio = () => {
    return (
      <div className="-mt-20">
        <Carousel className={carouselStyles.carousel}>
          <CarouselContent>
              {carouselItems.map((item, index) =>
              (
              <CarouselItem
                key={index}
                className={`${carouselStyles.carouselItem} ${item}`}
              >
                <div className={carouselStyles.parentDiv}>
                  <div className={carouselStyles.imageParent}>
                    <img
                      src={carouselImages[index]}
                      className={item}
                      alt={`Image ${index + 1}`}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    );
  };
  
  export default ImageStudio;