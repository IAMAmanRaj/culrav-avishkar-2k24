import React, { useState, useEffect, useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import Gallery from "@/Components/Home/Gallery";
import HeroSection from "@/Components/Home/HeroSection";
import Schedule from "@/Components/Home/Schedule";
import { useSelector } from "react-redux";
import VideoLoader from "@/Components/Loaders/Videoloader";
import webSiteLoaderVideo from "@/assets/Website_Loader.webm";

function Home() {

  const [loading, setLoading] = useState(false);
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

  useLayoutEffect(() => {
    const hash = window.location.hash;

    if (hash!=="" && hash !== "#") {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 0);
    }
  }, []);

  const state = useSelector((state) => {
    state.user.user;
  });

  if (loading) {
    return <VideoLoader loading={loading} video={webSiteLoaderVideo} />;
  }

  return (
    <div className="bg-floralWhite relative z-20 ">
      <HeroSection />
      <Schedule />
      <Gallery />
      {/* <ImageSection/> */}
    </div>
  );
}
export default Home;
