
import TagItem from '../TagItem'
import styles from './style.module.scss'

type Props = {
  item: string,
};



const TagList: React.FC<Props> = () => (
  <div className={styles.tagList}>
  <TagItem item="Enhancement" />
  <TagItem item="UI" />
  <TagItem item="Patates"/>
  <TagItem item="Domates"/>
</div>
);


export default TagList