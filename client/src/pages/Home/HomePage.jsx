import Gallery from "@/Components/Home/Gallery";
import HeroSection from "@/Components/Home/HeroSection";
import Schedule from "@/Components/Home/Schedule";
import ProfileTape from "@/Components/Home/ProfileTape";
import { useSelector } from "react-redux";

function Home() {
  const state = useSelector((state) => {
    state.user.user;
  });
  if (state) {
    console.log(state); // just to check if the state is updated
  }
  return (
    <div className="bg-floralWhite">
      <HeroSection />
      <Schedule />
      <Gallery />
      <ProfileTape />
    </div>
  );
}
export default Home;
