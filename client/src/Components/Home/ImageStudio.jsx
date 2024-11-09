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
    "/ImageSection/img1.webp",
    "/ImageSection/img3.webp",
    "/ImageSection/img13.webp",
    "/ImageSection/img17.webp",
    "/ImageSection/img16.webp",
    "/ImageSection/img14.webp",
    "/ImageSection/img19.webp",
    "/ImageSection/img20.webp",
    "/ImageSection/img21.webp",
    "/ImageSection/img22.webp",
    "/ImageSection/img23.webp",
    "/ImageSection/img24.webp",
    "/ImageSection/img28.webp",
    "/ImageSection/img29.webp",
    "/ImageSection/img30.webp",
    "/ImageSection/img31.webp",
    "/ImageSection/img32.webp",
    "/ImageSection/img33.webp",
    "/ImageSection/img34.webp",
    "/ImageSection/img36.webp",
    "/ImageSection/img39.webp",
    "/ImageSection/img43.webp",
    "/ImageSection/img48.webp",
    "/ImageSection/img49.webp",
    "/ImageSection/img.webp",
    "/ImageSection/img6.webp",
  ];
  
  const ImageStudio = () => {
    return (
      <div className="-mt-12">
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
                      loading="lazy"
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