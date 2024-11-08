import img from "@/assets/Home/avishkar.webp"

function PersonCard({ profile }) {
    return (
        <div className="w-full border-gray-200 border-2 h-full flex flex-col">
            <div className="w-full h-[90%]">
                <img src={img} className="object-fit " />
            </div>
            <div className="h-[10%] text-center 
            text-[1rem] md:text-[1rem] lg:text-[1.5vw] text-white font-bebas font-normal">
                {profile.name}
            </div>
        </div>
    )
}
export default PersonCard;
