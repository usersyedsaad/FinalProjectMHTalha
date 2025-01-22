import React from 'react'
import styles from './Reviews.module.css'
import Danny from '../../assets/Reviews/Danny.png'
import leftArrow from '../../assets/Reviews/ArrowReverse.svg';
import rightArrow from '../../assets/Reviews/ArrowForward.svg';
const Reviews = () => {
  return (
    <section id='resources' className={styles.reviewsSection}>
      <div className={styles.wantToSeeMore}>
        <h4>Want to see more?</h4>
        <p>Reach out to me <span className={styles.highlight}>HMTalha@gmail.com</span></p>
      </div>
      <div className={styles.reviewContainer}>
        <div className={styles.textContent}>
          <h4>Read what our clients have to say?</h4>
          <div className={styles.reviewContent}>
            <div className={styles.review}><p>One of the biggest challenges we face as business owners is high client expectations given the rapid evolution of different payment methods. Talha always listens to our needs. There&apos;s always a lot of respect there, and his professionalism makes the business relationship enjoyable. Thank you</p></div>
            <div className={styles.lowerSection}>
              <div className={styles.brandSection}>
                <h5>Dany Giljess</h5>
                <p>Erody Stuios Agency</p>
              </div>
              <div className={styles.buttonsDiv}>
                <button className={styles.leftButton}><img src={leftArrow} alt="Left Arrow" /></button>
                <button className={styles.rightButton}><img src={rightArrow} alt="Right Arrow" /></button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageDiv}><img className={styles.Image} src={Danny} alt="Danny Giljess"/></div>
      </div>
    </section>
  )
}

export default Reviews