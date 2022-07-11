import { useFeedbackState } from '../../context/FeedbackContext'
import Card from '../Card'
import styles from './style.module.scss'
function FeedbackList() {
  const feedbacks = useFeedbackState();
  return (
    <div className={styles.feedbackList}>
      {feedbacks.map(feedback => (
        <Card feedback={feedback} key={feedback.id}/>
      ))}
      
      
    </div>
  )
}

export default FeedbackList