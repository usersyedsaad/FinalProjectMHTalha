

import styles from "./Carousal.module.css"
import MatteredLogo from "/assets/Home/Mattered.png"
import SubwayLogo from "/assets/Home/Subway.png"
import ClasspassLogo from "/assets/Home/ClassPass.png"
import NationalBankLogo from "/assets/Home/NationalBank.png"
import BoltShiftLogo from "/assets/Home/BoltShift.png"
import LightBoxLogo from "/assets/Home/LightBox.png"
import CocaColaLogo from "/assets/Home/CocaCola.png"

const MarqueeCarousel = () => {
  const logos = [
    MatteredLogo,
    SubwayLogo,
    ClasspassLogo,
    NationalBankLogo,
    BoltShiftLogo,
    LightBoxLogo,
    CocaColaLogo,
    
  ];

  return (
    <div className={styles.container}>
      <div className={styles.animateMarquee}>
        {/* Render logos */}
        {logos.map((logo, index) => (
          <div
            key={index}
            className={styles.indi-logo}
          >
            <img src={logo} alt={`Logo ${index + 1}`} className={styles.image} />
          </div>
        ))}
        {/* Repeat logos for continuous scrolling */}
        {logos.map((logo, index) => (
          <div
            key={`duplicate-${index}`}
            className={styles.indi-logo}
          >
            <img src={logo} alt={`Logo Duplicate ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeCarousel;