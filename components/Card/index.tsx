import RatingItem from '../RatingItem'
import TagItem from '../TagItem'
import styles from './style.module.scss'
function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.voteWrapper}>
        <RatingItem />
      </div>
      <div className={styles.content}>
        <h3>Add a dark theme option</h3>
        <small>It would help people with light sensitivities and who prefer dark mode.</small>
        <TagItem item="Enhancement"/>
      </div>
    </div>
  )
}

export default Card