import styles from './Carousal.module.css';
// Static imports
import MatteredLogo from '../../../public/assets/Home/Mattered.png';
import SubwayLogo from '../../../public/assets/Home/Subway.png';
import ClasspassLogo from '../../../public/assets/Home/ClassPass.png';
import NationalBankLogo from '../../../public/assets/Home/NationalBank.png';
import BoltShiftLogo from '../../../public/assets/Home/BoltShift.png';
import LightBoxLogo from '../../../public/assets/Home/LightBox.png';
import CocaColaLogo from '../../../public/assets/Home/CocaCola.png';

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
