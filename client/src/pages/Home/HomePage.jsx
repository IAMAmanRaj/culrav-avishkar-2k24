import React, { useState, useEffect } from "react";
import {useLocation} from "react-router-dom";
import Gallery from "@/Components/Home/Gallery";
import HeroSection from "@/Components/Home/HeroSection";
import Schedule from "@/Components/Home/Schedule";
import ProfileTape from "@/Components/Home/ProfileTape";
import { useSelector } from "react-redux";
import VideoLoader from "@/Components/Loaders/Videoloader";
import webSiteLoaderVideo from "@/assets/Website_Loader.webm";

function Home() {

  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const isPageReload = window.performance.navigation.type === 1;
    const isInternalNavigation = sessionStorage.getItem('isInternalNevigation') == 'true';

    if (!isPageReload && !isInternalNavigation) {
      const timer = setTimeout(() => setLoading(false), 9800); // Adjust timing as needed
      return () => clearTimeout(timer);
    }
    else {
      setLoading(false);
    }
  }, []);

  const state = useSelector((state) => {
    state.user.user;
  });

  if (loading) {
    return <VideoLoader loading={loading} video={webSiteLoaderVideo} />;
  }

  return (
    <div className="bg-floralWhite relative z-20 transition-opacity duration-700 opacity-0 animate-fade-in">
      <HeroSection />
      <Schedule />
      <Gallery />
    </div>
  );
}
export default Home;
