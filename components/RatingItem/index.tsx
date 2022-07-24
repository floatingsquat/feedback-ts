import styles from './style.module.scss'
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useFeedbackDispatch } from '../../context/FeedbackContext';
import { Feedback } from '../../types';

type voteProps = {
  feedback: Feedback
}



function RatingItem({feedback} : voteProps) {
  const dispatch = useFeedbackDispatch();
  const onClickHandler = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "VOTE_FEEDBACK",
      id: feedback.id
    });
  
  }

  return (
    <div className={styles.rating}>
      <button onClick={onClickHandler}><AiOutlineArrowUp /></button>
      <small>{feedback.vote}</small>
    </div>
  )
}

export default RatingItem