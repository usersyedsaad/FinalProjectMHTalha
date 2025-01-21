import WorkCard from './WorkCard.jsx';

import WorkImg1 from '../../assets/Work/WorkImg1.png';
import WorkImg2 from '../../assets/Work/WorkImg2.png';
import WorkImg3 from '../../assets/Work/WorkImg3.png';
import WorkImg4 from '../../assets/Work/WorkImg4.png';
import styles from './Work.module.css';



const Work = () => {
  return (
    <div id="Work" className={styles.container}>
      <div className={styles.header}>
        <h4 className={styles.title}>My Work</h4>
        <p className={styles.description}>A piece from my selection of favorites</p>
      </div>
      <div className={styles.workCards}>
        <WorkCard imgUrl={WorkImg1} title="Project 1" description="Design & Development" />
        <WorkCard imgUrl={WorkImg2} title="Project 1" description="Design & Development" />
        <WorkCard imgUrl={WorkImg3} title="Project 1" description="Design & Development"/>
        <WorkCard imgUrl={WorkImg4} title="Project 1" description="Design & Development"/>
      </div>
    </div>
  );
};

export default Work;
