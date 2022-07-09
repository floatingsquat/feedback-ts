import styles from './style.module.scss'
import { FcCopyright } from 'react-icons/fc';

function Footer() {
  return (
    <footer className={styles.footer}>  
    <a
      href="#"
    >
       <FcCopyright className={styles.icon}/>
       Feedback Board App 
      <span className={styles.logo}>
       
      </span>
    </a>
  </footer>
  )
}

export default Footer