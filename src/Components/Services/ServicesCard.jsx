import styles from './Services.module.css'

const ServicesCard = () => {
  return (
    <div className={styles.cardContainer}>
      <div className='  '><p className={styles.cardNumber}>01</p></div>
      
      <div>
        <h4 className={styles.cardName}>Design</h4>
        <p className={styles.cardDescription}>I make web designs that engage your audience and create the user experience you want.</p>
      </div>
    </div>
  )
}

export default ServicesCard