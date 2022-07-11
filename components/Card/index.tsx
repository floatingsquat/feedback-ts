import RatingItem from '../RatingItem'
import TagItem from '../TagItem'
import styles from './style.module.scss'
import { useFeedbackDispatch } from '../../context/FeedbackContext';
import {Feedback} from '../../types/index'

type FeedbackCardProps = {
  feedback: Feedback
}
function Card({feedback}: FeedbackCardProps) {
  const dispatch = useFeedbackDispatch();
  return (
    <div className={styles.card}>
      <div className={styles.voteWrapper}>
        <RatingItem vote={feedback.vote} />
      </div>
      <div className={styles.content}>
        <h3>{feedback.title}</h3>
        <small>{feedback.desc}</small>
        <div className={styles.tagList}>
        {feedback.tags.map(tag => (
          <TagItem item={tag}/>
        ))}
        </div>
        
      </div>
    </div>
  )
}

export default Card