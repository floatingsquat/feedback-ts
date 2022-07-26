
import { useFeedbackDispatch, useFeedbackState } from '../../context/FeedbackContext';
import TagItem from '../TagItem'
import styles from './style.module.scss'

type Props = {
  item: string,
};

function TagList ({ item }: Props) {
 const feedbacks = useFeedbackState();
 const arr: string[] = [];
  return(
    <div className={styles.tagList}>
    {feedbacks.length ? feedbacks.map(feedback => (
      feedback.tags.map(item => {
        if(!arr.includes(item)) {
          arr.push(item)
          return <TagItem item={item} />
        }
      
      })
    )) : <small>No tag found!</small>}
  

</div>
);
}

export default TagList