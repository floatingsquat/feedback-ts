import styles from './style.module.scss'
import { RiFeedbackLine } from 'react-icons/ri';
function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.filterWrapper}>
      <div className={styles.counter}> 
        <div className={styles.iconWrapper}>
      <RiFeedbackLine/>
      <span>6 Suggestions</span>
      </div></div>
      <div>
      <label htmlFor="sorting">Sort by: </label> <span>
      <select id="sorting">
        <option value="rating">Rating</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      </span></div>
      </div>
      <div className={styles.buttonWrapper}>
      <button className={styles.buttonPrimary}>+ Add Feedback</button>


      </div>
      
    </div>
  )
}

export default Navbar