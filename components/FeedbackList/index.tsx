import Card from '../Card'
import styles from './style.module.scss'
function FeedbackList() {
  return (
    <div className={styles.feedbackList}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default FeedbackList