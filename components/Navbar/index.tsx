import styles from './style.module.scss'
import { RiFeedbackLine } from 'react-icons/ri';
import Button from '../Button';
import { useFeedbackDispatch } from '../../context/FeedbackContext';
import Modal from '../Modal';
import { useState, useEffect } from 'react';




function Navbar() {
  const dispatch = useFeedbackDispatch();
  const [showModal, setShowModal] = useState(false);
  const [selectedSortingType, setSelectedSortingType] = useState('rating');
  const showModalOnClickHandler = () => {
    setShowModal(!showModal)
  }
  

  const onSortingChange = (e: React.FormEvent) => {
    const selectedValue = (e.target as HTMLTextAreaElement).value;
    setSelectedSortingType(selectedValue);

    dispatch({
      type: "SORT_BY",
      sortingType: selectedValue,
    });
  
  }



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
      <select onChange={onSortingChange} id="sorting" value={selectedSortingType}>
        <option value="rating">Rating</option>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
      </span></div>
      </div>
      <div className={styles.buttonWrapper}>
      <Button onClick ={showModalOnClickHandler}>+ Add Feedback</Button>
      <Modal toggle={showModal} action={showModalOnClickHandler} />
      </div>
      
    </div>
   
  )
}

export default Navbar