import styles from './Home.module.css';
import {getImageUrl} from '../../utils'
import MarqueeCarousel from '../Carousal/Carousal';
const Home = () => {
  return (
    <section className={styles.home}>
      <div className={styles.centerContent}>
      <div className={styles.textContent}><h1 className={styles.heading}>Hi HM Talha here 👋</h1>
        <p className={styles.paragraph}>
          I Help Entrepreneurs with High-Quality &nbsp;<span className={styles.highlight}>&nbsp;&nbsp;Designs & Development&nbsp;&nbsp;</span>&nbsp;
           Solutions that Generate ROI</p></div>
        <div className={styles.socialLinks}>
            <button className={styles.socialButton}>Get a Quote</button>
            <span>
              <span className={styles.Icons}>
                <img src={getImageUrl("Home/whatsappIcon.svg")} alt="Email Icon" />
                <img src={getImageUrl("Home/whatsappIcon.svg")} alt="Email Icon" />
                <img src={getImageUrl("Home/instagramIcon.svg")} alt="Email Icon" />
                <img src={getImageUrl("Home/linkedinIcon.svg")} alt="Email Icon" />
              </span>
            </span>
          </div>
      </div>
      <MarqueeCarousel/>
    </section>
  )
}

export default Home