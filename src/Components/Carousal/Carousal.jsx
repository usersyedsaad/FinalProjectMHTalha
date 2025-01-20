import styles from './Carousal.module.css';
import MatteredLogo from '../../assets/Home/Home/Mattered.png'
// Importing logos individually

import SubwayLogo from '../../assets/Home/Home/Subway.png';
import ClasspassLogo from '../../assets/Home/Home/ClassPass.png';
import NationalBankLogo from '../../assets/Home/Home/NationalBank.png';
import BoltShiftLogo from '../../assets/Home/Home/BoltShift.png';
import LightBoxLogo from '../../assets/Home/Home/LightBox.png';
import CocaColaLogo from '../../assets/Home/Home/CocaCola.png';

const MarqueeCarousel = () => {
  // Array of imported logos
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
          <div key={index} className={styles.indiLogo}>
            <img src={logo} alt={`Logo ${index + 1}`} className={styles.image} />
          </div>
        ))}
        {/* Repeat logos for continuous scrolling */}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className={styles.indiLogo}>
            <img src={logo} alt={`Logo Duplicate ${index + 1}`} className={styles.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeCarousel;
