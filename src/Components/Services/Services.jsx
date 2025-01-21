
import styles from './Services.module.css'
import ServicesCard from './ServicesCard'
const Services = () => {
  return (
    <section className={styles.servicesContainer}>
      <h3 className={styles.heading}>I can help you with.</h3>
      <div className={styles.cardsContainer}>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
        <ServicesCard/>
      </div>
    </section>
  )
}

export default Services