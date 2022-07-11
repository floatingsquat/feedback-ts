import { useFeedbackState } from '../../context/FeedbackContext'
import Card from '../Card'
import styles from './style.module.scss'
function FeedbackList() {
  const feedbacks = useFeedbackState();
  return (
    <div className={styles.feedbackList}>
      {feedbacks.length ? (feedbacks.map(feedback => (
        <Card feedback={feedback} key={feedback.id}/>
      ))) : <h3>There is no any feedback yet!</h3>}
      
      
    </div>
  )
}

export default FeedbackList