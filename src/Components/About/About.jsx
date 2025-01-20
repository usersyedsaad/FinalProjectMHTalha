
import { getImageUrl } from '../../utils'
import styles from './About.module.css'
const About = () => {
  return (
    <section className={styles.about}>
      <h2 className={styles.headingOne}>I Collaborate with brands and agencies to create impactful results.</h2>
      <div className={styles.aboutMe}>
        <div className={styles.circleContainer}><img className={styles.circleImage} src={getImageUrl('About/Sassac1.png')} alt="Avatar" /></div>
        <div className={styles.contentDiv}>
          <h3 className={styles.heading}>About Me</h3>
          <p className={styles.paragraph}>I&apos;m helping startups and business owners to make a visual statement through spotless Web Design and Development so they can increase brand awareness and sell more.</p>
          <button className={styles.discoveryButton}>Book a Discovery Call <img src={getImageUrl('About/arrow-forward.png')} alt="Arrow Forward" /></button>
        </div>
      </div>
      <h3 className={styles.headingTwo}>I take a critical approach, applying the results of my explorations to create collisions of insight, inspiration and experimentation, for you</h3>
    </section>
  )
}

export default About