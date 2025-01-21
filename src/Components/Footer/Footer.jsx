import React from 'react'
import styles from './Footer.module.css'
import ArrowUp from '../../assets/About/About/ArrowUp.png'
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftSection}>
        <h5>© 2022 MH TALHA. All right reserved.</h5>
      </div>
      <div className={styles.rightSection}>
        <p>Back to top</p>
        <button className={styles.ArrowUpButton}>
          <img className={styles.ArrowUp} src={ArrowUp} alt="Arrow Up" />
        </button>
      </div>
    </footer>
  )
}

export default Footer