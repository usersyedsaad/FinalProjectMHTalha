import styles from './WorkCard.module.css'

const WorkCard = (props) => {
  return (
    <div className={styles.workCardContainer}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={props.imgUrl} alt={props.altText} />
      </div>
      <div className={styles.cardContent}>
        <p className={styles.cardName}>{props.title}</p>
        <p className={styles.cardDescription}>{props.description}</p>
      </div>
    </div>
  )
}

export default WorkCard