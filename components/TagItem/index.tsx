import { ReactNode } from 'react'
import styles from './style.module.scss'
interface Props {
  item?: ReactNode

}
  function TagItem ({ item }: Props) {
  return (
    <div className={styles.tagItem}>
      {item}
    </div>
  )
}

export default TagItem