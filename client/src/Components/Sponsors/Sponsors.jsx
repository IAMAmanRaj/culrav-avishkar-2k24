import React from "react";
import noise from "../../assets/Sc-assets/noise.png";
import grid from "../../assets/Sc-assets/Grid.png";
import triangle from "../../assets/Sc-assets/triangle.png";

// Import sponsor logos
import sbiLogo from "../../assets/sponsors/sbi.webp";
import bpclLogo from "../../assets/sponsors/bpcl.webp";
import licLogo from "../../assets/sponsors/lic.webp";
import bobLogo from "../../assets/sponsors/bob.webp";
import wacomLogo from "../../assets/sponsors/wacomu.jpg";
import redfmLogo from "../../assets/sponsors/redfm.png";
import dainikJagranLogo from "../../assets/sponsors/dainik.webp";
import safexpressLogo from "../../assets/sponsors/safeexpress.webp";
import jkCementLogo from "../../assets/sponsors/JKCEMENT.NS_BIG.webp";
import codingBlocksLogo from "../../assets/sponsors/codingbloacks.webp";
import kdmLogo from "../../assets/sponsors/ksm.webp";
import beardoLogo from "../../assets/sponsors/beardo.webp";
import dkmslogo from "../../assets/sponsors/dkms.jpg";
import jioSaavnLogo from "../../assets/sponsors/jiosaavan.webp";
import eventara from "../../assets/sponsors/eventara.jpeg";
import sanskriti from "../../assets/sponsors/sanskriti.jpeg";

// More Sponsors
import nbcLogo from "../../assets/sponsors/nbc.webp";
import htlLogo from "../../assets/sponsors/htl.png";
import internshalaLogo from "../../assets/sponsors/internshala.png";
import quillbotLogo from "../../assets/sponsors/quillbot.png";
import cocaColaLogo from "../../assets/sponsors/cocacola.png";
import codingNinjasLogo from "../../assets/sponsors/codingninjas.jpeg";
import upTourismLogo from "../../assets/sponsors/uptourism.png";
import duke from "../../assets/sponsors/duke.png";
import iihm from "../../assets/sponsors/IIHM.png";

const Sponsors = () => {
  const sponsorData = [
    { title: "TITLE SPONSOR", logo: sbiLogo },
    { title: "GOLD PARTNER", logo: bpclLogo },
    { title: "INSURANCE PARTNER", logo: licLogo },
    { title: "EXECUTIVE SPONSOR", logo: bobLogo },
    { title: "OFFICIAL GIFTING PARTNER", logo: wacomLogo },
    { title: "RADIO PARTNER", logo: redfmLogo },
    { title: "OFFICIAL PRINT MEDIA PARTNERS", logo: dainikJagranLogo },
    { title: "OFFICIAL SUPPLY CHAIN PARTNER", logo: safexpressLogo },
    { title: "CEMENTING PARTNER", logo: jkCementLogo },
    { title: "CODING PLATFORM PARTNER", logo: codingBlocksLogo },
    { title: "PREMIUM MOBILE ACCESSORIES PARTNER", logo: kdmLogo },
    { title: "OFFICIAL GROOMING PARTNER", logo: beardoLogo },
    { title: "SOCIAL INITIATIVE PARTNER", logo: dkmslogo },
    { title: "FESTIVAL PARTNER", logo: eventara },
    { title: "MUSIC STREAMING PARTNER", logo: jioSaavnLogo },
    { title: "CULTURAL PARTNER", logo: sanskriti },
  ];

  const moreSponsors = [
    { logo: duke },
    { logo: nbcLogo },
    { logo: htlLogo },
    { logo: internshalaLogo },
    { logo: quillbotLogo },
    { logo: cocaColaLogo },
    { logo: codingNinjasLogo },
    { logo: iihm },
    { logo: upTourismLogo },
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
          <div key={index} className="w-full max-w-6xl mx-auto mt-14 space-y-24">
            {/* Section Title */}
            <h2 className="text-[#F54E25] font-[Bionix] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center">
              {section.title}
            </h2>

            {/* Sponsor Box with Image */}
            <div className="flex flex-wrap justify-center gap-8 sm:gap-16 px-4">
              <div
                className="w-56 h-40 sm:w-64 sm:h-48 bg-transparent flex items-center justify-center rounded-lg hover:scale-110 hover:shadow-lg transition-transform duration-200 ease-in-out"
              >
                {/* Sponsor Logo Image */}
                <img
                  src={section.logo}
                  alt={`${section.title} Logo`}
                  className="w-3/4 h-auto scale-150 object-contain"
                />
              </div>
            </div>
          </div>
        ))}

        {/* More Sponsors Section */}
        <div className="w-full max-w-6xl mx-auto mt-24 space-y-12">
          <h2 className="text-[#F54E25] font-[Bionix] text-3xl sm:text-4xl md:text-5xl font-extrabold mb-6 text-center">
            MORE SPONSORS
          </h2>

          {/* More Sponsors Box with Images */}
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12 px-4">
            {moreSponsors.map((sponsor, index) => (
              <div
                key={index}
                className="w-56 h-40 sm:w-64 sm:h-48 bg-transparent flex items-center justify-center rounded-lg hover:scale-110 hover:shadow-lg transition-transform duration-200 ease-in-out"
              >
                {/* Sponsor Logo Image */}
                <img
                  src={sponsor.logo}
                  alt={`More Sponsor Logo ${index + 1}`}
                  className="w-3/4 h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
