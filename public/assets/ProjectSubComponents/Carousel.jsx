import React from "react";
import "./Carousel.css"
import matteredLogo from "../../../assets/imgs/Mattered.png"
import SubwayLogo from "../../../assets/imgs/Subway.png"
import ClasspassLogo from "../../../assets/imgs/ClassPass.png"
import NationalBankLogo from "../../../assets/imgs/NationalBank.png"
import BoltShiftLogo from "../../../assets/imgs/BoltShift.png"
import LightBoxLogo from "../../../assets/imgs/LightBox.png"
import CocaColaLogo from "../../../assets/imgs/CocaCola.png"

const MarqueeCarousel = () => {
  const logos = [
    matteredLogo,
    SubwayLogo,
    ClasspassLogo,
    NationalBankLogo,
    BoltShiftLogo,
    LightBoxLogo,
    CocaColaLogo,
    
  ];

  return (
    <div className="overflow-hidden w-full relative ">
      <div className="flex items-center gap-6 animate-marquee">
        {/* Render logos */}
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-none w-1/4 flex justify-center items-center transition-transform duration-300 hover:scale-105"
          >
            <img src={logo} alt={`Logo ${index + 1}`} className="w-[100px]" />
          </div>
        ))}
        {/* Repeat logos for continuous scrolling */}
        {logos.map((logo, index) => (
          <div
            key={`duplicate-${index}`}
            className="flex-none w-1/4 flex justify-center items-center transition-transform duration-300 hover:scale-105"
          >
            <img src={logo} alt={`Logo Duplicate ${index + 1}`} className="w-[100px]" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeCarousel;
