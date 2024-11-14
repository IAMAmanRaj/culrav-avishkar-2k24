import React from "react";
import noise from "../../assets/Sc-assets/noise.png";
import grid from "../../assets/Sc-assets/Grid.png";
import triangle from "../../assets/Sc-assets/triangle.png";

// Import sponsor logos
import sbiLogo from "../../assets/sponsors/sbi.webp";
import bpclLogo from "../../assets/sponsors/bpcl.webp";
import licLogo from "../../assets/sponsors/lic.webp";
import bobLogo from "../../assets/sponsors/bob.webp";
import wacomLogo from "../../assets/sponsors/wacom.webp";
import redfmLogo from "../../assets/sponsors/redfm.webp";
// import dainikJagranLogo from "../../assets/sponsors/dainik-jagran.webp";
import safexpressLogo from "../../assets/sponsors/safeexpress.webp";
import jkCementLogo from "../../assets/sponsors/JKCEMENT.NS_BIG.webp";
import codingBlocksLogo from "../../assets/sponsors/codingbloacks.webp";
import kdmLogo from "../../assets/sponsors/ksm.webp";
// import beardoLogo from "../../assets/sponsors/beardo.webp";
// import eventaraLogo from "../../assets/sponsors/eventara.webp";
// import jioSaavnLogo from "../../assets/sponsors/jio-saavn.webp";
// import sanskritiVibhagLogo from "../../assets/sponsors/sanskriti-vibhag.webp";

const Sponsors = () => {
  const sponsorData = [
    { title: "TITLE SPONSOR", logo: sbiLogo },
    { title: "GOLD PARTNER", logo: bpclLogo },
    { title: "INSURANCE PARTNER", logo: licLogo },
    { title: "EXECUTIVE SPONSOR", logo: bobLogo },
    { title: "OFFICIAL GIFTING PARTNER", logo: wacomLogo },
    { title: "RADIO PARTNER", logo: redfmLogo },
    // { title: "OFFICIAL PRINT MEDIA PARTNERS", logo: dainikJagranLogo },
    { title: "OFFICIAL SUPPLY CHAIN PARTNER", logo: safexpressLogo },
    { title: "CEMENTING PARTNER", logo: jkCementLogo },
    { title: "CODING PLATFORM PARTNER", logo: codingBlocksLogo },
    { title: "PREMIUM MOBILE ACCESSORIES PARTNER", logo: kdmLogo },
    // { title: "OFFICIAL GROOMING PARTNER", logo: beardoLogo },
    // { title: "FESTIVAL PARTNER", logo: eventaraLogo },
    // { title: "MUSIC STREAMING PARTNER", logo: jioSaavnLogo },
    // { title: "CULTURAL PARTNER", logo: sanskritiVibhagLogo },
  ];

  return (
    <div className="w-full relative z-20 min-h-screen bg-[#202020] flex flex-col items-center justify-start px-4 sm:px-8 pt-24 md:pb-24">
      <img
        src={noise}
        alt="Noise Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <img
        src={grid}
        alt="Grid Overlay"
        className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <img
        src={triangle}
        alt="Design Elements"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center py-20">
        {/* Main Title */}
        <h1 className="text-white font-[Bionix] text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-12">
          SPONSORS
        </h1>

        {/* Sponsors List */}
        {sponsorData.map((section, index) => (
          <div key={index} className="w-full max-w-6xl mx-auto mt-14 space-y-12">
            {/* Section Title */}
            <h2 className="text-[#F54E25] font-[Bionix] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center">
              {section.title}
            </h2>

            {/* Sponsor Box with Image */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-12 px-4">
              <div
                className="w-56 h-40 sm:w-64 sm:h-48 bg-transparent flex items-center justify-center rounded-lg hover:scale-110 hover:shadow-lg transition-transform duration-200 ease-in-out"
              >
                {/* Sponsor Logo Image */}
                <img
                  src={section.logo}
                  alt={`${section.title} Logo`}
                  className="w-3/4 h-auto object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsors;
