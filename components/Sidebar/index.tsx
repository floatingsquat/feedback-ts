import Logo from '../Logo'
import TagList from '../TagList'
import styles from './style.module.scss'

function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo />
        <TagList />
    </div>
  )
}

export default Sidebar