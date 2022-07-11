import styles from './style.module.scss'
import { AiOutlineArrowUp } from 'react-icons/ai';

type voteProps = {
  vote: number
}
function RatingItem({vote} : voteProps) {
  return (
    <div className={styles.rating}>
      <button><AiOutlineArrowUp /></button>
      <small>{vote}</small>
    </div>
  )
}

export default RatingItem