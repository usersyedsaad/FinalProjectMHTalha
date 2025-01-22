import styles from './Contact.module.css';
import ArrowForward from '../../assets/About/About/ArrowForward.png'
import Footer from '../Footer/Footer'
const Contact = () => {
  return (
    <section id='contact' className={styles.contactContainer}>
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h4>Let&apos;s Make Something <span className={styles.highlight}>Great Together</span>. Start a <span className={styles.highlight}>conversation</span> 👋</h4>
        <p>Get in touch if you want to discuss your project , learn more about my methodologies, or just to <span className={styles.highlight}>say hello!</span></p>
      </div>
      <div className={styles.socialButtons}>
        <button className={ styles.blueButton} onClick={() => (window.location.href = "mailto:hmtalha@gmail.com")}><p>HMTalha@gmail.com</p> <img className={styles.blackArrow} src={ArrowForward} alt="Arrow Forward" /></button>
        <span className={styles.grayButtons}>
          <button className={styles.grayButton}>linked in</button>
          <button className={styles.grayButton}>Email</button>
          <button className={`${styles.grayButton}`}>Whatsapp</button>
        </span>
      </div>
    </div>
    <hr className={styles.horizontaRule} />
    <Footer/>
    </section>
  )
}

export default Contact