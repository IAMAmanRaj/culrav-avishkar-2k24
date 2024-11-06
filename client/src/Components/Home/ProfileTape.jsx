import reel_tape from "../../assets/Home/reel_tape.png"

function ProfileTape() {
    return (
        <div className="bg-customOrange flex relative overflow-hidden xs:h-[29vw] xs:py-0 py-8">
            <div className="justify-center w-full xs:mb-0 mb-[2.5rem]  xs:w-[50%] flex-col py-[5%] px-[4%] xs:justify-start items-start gap-[10vw] xs:gap-[2vw] inline-flex">
                <div className="self-stretch text-white  text-[2rem] xs:text-[3.3vw] font-normal font-bebas tracking-wide">Create Your Profile to Register for Events</div>
                <div className="w-full xs:w-auto px-[2vw] py-3 bg-dark_primary justify-center items-center inline-flex">
                    <div className="text-[#fffaf0] text-[6vw] xs:text-[2.2vw] font-normal font-bebas tracking-wide">Create Your Profile</div>
                </div>
            </div>
            <img className="hidden xs:block absolute h-[28vw] right-[-3%] top-[2%]" src={reel_tape} alt="reel_tape" />
        </div>
    )
}

export default ProfileTape;