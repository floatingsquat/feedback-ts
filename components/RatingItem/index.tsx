import styles from './style.module.scss'
import { AiOutlineArrowUp } from 'react-icons/ai';

function RatingItem() {
  return (
    <div className={styles.rating}>
      <button><AiOutlineArrowUp /></button>
      <small>122</small>
    </div>
  )
}

export default RatingItem