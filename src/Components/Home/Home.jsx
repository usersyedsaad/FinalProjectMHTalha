import styles from './Home.module.css';
import InstagramIcon from '../../assets/Home/Home/instagramIcon.svg'
import LinkedinIcon from '../../assets/Home/Home/linkedinIcon.svg'
import TwitterIcon from '../../assets/Home/Home/twitterIcon.svg'
import WhatsappIcon from '../../assets/Home/Home/whatsappIcon.svg'
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
            <button className={styles.socialButton} onClick={() => (window.location.href = "mailto:hmtalha@gmail.com")}>Get a Quote</button>
            <span>
              <span className={styles.Icons}>
                <img src={InstagramIcon} alt="Instagram Icon" />
                <img src={LinkedinIcon} alt="Linkedin Icon" />
                <img src={TwitterIcon} alt="Twitter Icon" />
                <img src={WhatsappIcon} alt="Whatsapp Icon" />
              </span>
            </span>
          </div>
      </div>
      <MarqueeCarousel/>
    </section>
  )
}

export default Home