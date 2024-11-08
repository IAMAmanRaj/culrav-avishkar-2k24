function PersonCard({ profile }) {
  return (
    <div className="w-full border-gray-200 border-2 h-full flex flex-col">
      <div className="flex w-full h-[90%] justify-center">
        {/* <img
          src={profile?.img}
          style={{
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
          className="object-fit"
        /> */}
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
