function PersonCard({ profile }) {
    return (
        <div className="w-full border-gray-200  border-2 h-full flex flex-col">
            <div className="w-full h-[90%] justify-center items-center flex">
                <img
                    src={profile.img}
                    alt="Profile"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: "contain", // Ensures the image covers the container without distortion
                        objectPosition: 'center' // Centers the image within the container
                    }}
                />
            </div>
            <div
                className="h-[10%] text-center 
            text-[1rem] md:text-[1rem] lg:text-[1.5vw] text-white font-bebas font-normal"
            >
                {profile.name}
            </div>
        </div>
    );
}
export default PersonCard;
