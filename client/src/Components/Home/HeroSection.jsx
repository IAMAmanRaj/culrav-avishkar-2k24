import img_center from "../../assets/Home/person_center.png"
import img_right1 from "../../assets/Home/person_right1.png"
import img_right2 from "../../assets/Home/person_right2.png"
import img_left1 from "../../assets/Home/person_left1.png"
import img_left2 from "../../assets/Home/person_left2.png"
import circular_disc from "../../assets/Home/circularDisc.png"
import HorizontalRoller from "./HorizontalRoller"

function HeroSection() {
    return (
        <div className="w-full md:top-10 h-[160vw] xs:h-[50vw] overflow-hidden relative bg-floral_white">
            <div className="h-full w-full absolute z-10">
                <div className="w-[200vw]  absolute h-[55vw] xs:w-[83vw] xs:left-[9%] xs:h-[45vw] overflow-hidden">
                    <img className="h-[180vw] left-[-25%] top-[-230%] xs:left-0 xs:h-[80vw] w-full xs:top-[-103%] absolute" src={circular_disc} />
                </div>
            </div>
            <div className="h-full w-full relative ">
                <div className="hidden xs:block absolute w-[17vw] h-full left-0 ">
                    <img className="w-full h-[18vw] left-0 bottom-0 absolute" src={img_left2} />
                </div>
                <div className="w-[50vw] xs:w-[17vw] h-full right-0 absolute overflow-hidden">
                    <img className="w-full h-[65vw] xs:h-[18vw] right-[-15%] xs:right-0 bottom-0 absolute opacity-[0.5] xs:opacity-100 transition-opacity duration-500 ease-in-out" src={img_right2} />
                </div>
                <div className="xs:right-[11%] w-[60vw] xs:w-[25vw] h-full top-0 absolute ">
                    <img className="w-full h-[80vw] xs:h-[28vw] left-[-40%] xs:left-0 bottom-0 absolute opacity-[0.5] xs:opacity-100 transition-opacity duration-500 ease-in-out" src={img_right1} />
                </div>
                <div className="hidden xs:block  w-[25vw] h-full left-[11%] top-0 absolute ">
                    <img className="w-full h-[26vw] left-0 bottom-0 absolute" src={img_left1} />
                </div>

                <div className="z-20 w-[100vw] h-[100vw] xs:h-[45vw] xs:w-[45vw] bottom-0 xs:left-[30%] absolute">
                    <img className="w-full h-full left-0 bottom-0 absolute" src={img_center} />
                </div>
            </div>
            {/* Adding Scroller - Ayush */}
            <HorizontalRoller/>
        </div>
    )

}
export default HeroSection