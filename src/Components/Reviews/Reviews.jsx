import React, { useState } from 'react'
import styles from './Reviews.module.css'
import Danny from '../../assets/Reviews/Danny.png'
import leftArrow from '../../assets/Reviews/ArrowReverse.svg';
import rightArrow from '../../assets/Reviews/ArrowForward.svg';

const Reviews = () => {
  // Sample data to simulate review items
  const reviews = [
    { name: 'Danny Giljess', review: 'One of the biggest challenges we face as business owners is high client expectations given the rapid evolution of different payment methods. Talha always listens to our needs. There’s always a lot of respect there, and his professionalism makes the business relationship enjoyable. Thank you', image: Danny},
    { name: 'John Doe', review: 'The professionalism makes the relationship enjoyable...' },
    { name: 'Jane Smith', review: 'A pleasure working with Talha, very responsive...' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const hasNext = currentIndex < reviews.length - 1;
  const hasPrev = currentIndex > 0;

  const goNext = () => {
    if (hasNext) setCurrentIndex(currentIndex + 1);
  };

  const goPrev = () => {
    if (hasPrev) setCurrentIndex(currentIndex - 1);
  };

  return (
    <section id="resources" className={styles.reviewsSection}>
      <div className={styles.wantToSeeMore}>
        <h4>Want to see more?</h4>
        <p>Reach out to me <span className={styles.highlight}>HMTalha@gmail.com</span></p>
      </div>
      <div className={styles.reviewContainer}>
        <div className={styles.textContent}>
          <h4>Read what our clients have to say?</h4>
          <div className={styles.reviewContent}>
            <div className={styles.review}>
              <p>{reviews[currentIndex].review}</p>
            </div>
            <div className={styles.lowerSection}>
              <div className={styles.brandSection}>
                <h5>{reviews[currentIndex].name}</h5>
                <p>Erody Studios Agency</p>
              </div>
              <div className={styles.buttonsDiv}>
                <button
                  className={hasPrev ? styles.leftButton : `${styles.leftButton} ${styles.disabled}`}
                  onClick={goPrev}
                  disabled={!hasPrev}  // Disable the left button if no previous data
                >
                  <img src={leftArrow} alt="Left Arrow" />
                </button>
                <button
                  className={hasNext ? styles.rightButton : `${styles.rightButton} ${styles.disabled}`}
                  onClick={goNext}
                  disabled={!hasNext}  // Disable the right button if no next data
                >
                  <img src={rightArrow} alt="Right Arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.imageDiv}><img className={styles.Image} src={reviews[currentIndex].image} alt="Review Image" /></div>
      </div>
    </section>
  );
};

export default Reviews;
