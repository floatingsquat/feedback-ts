import React, { useState } from 'react'
import { useFeedbackDispatch } from '../../context/FeedbackContext';
import { StringToArray } from '../../utils/stringToArray';
import Button from '../Button';
import styles from './style.module.scss'

type Modal = {
  toggle: any;
  action: ()=> void;
}
function Modal({toggle, action} : Modal) {
const dispatch = useFeedbackDispatch();
const [title, setTitle] = useState('');
const [desc, setDesc] = useState('');
const [tags, setTags] = useState([""]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "ADD_FEEDBACK",
      data:{
        id: 0,
        title: title,
        desc: desc,
        tags: tags,
        vote:1,
      }
    });
    setTitle("");
    setDesc("");
   setTags([""]);
    

  }
  return (
 
    toggle && (
    <div className={styles.modal}>
      <div className={styles.content}>
      <form onSubmit={onSubmit}>
        <div className={styles.header}>
        <h2 className={styles.heading}>Add New Feedback</h2>
        <Button variant="close" onClick={action}>X</Button>
        </div>
        <div className={styles.body}>
          <label htmlFor='title'>Title:</label>
        <input value={title} type="text" id="title" placeholder='e.g. Add a comment section' onChange={(e)=> setTitle(e.target.value)}/>
        <label htmlFor='desc'>Description:</label>
        <input value={desc} type="text" id="desc" placeholder='e.g. A comment field can be added so that users can comment.' onChange={(e)=> setDesc(e.target.value)}/>
        <label htmlFor='tags'>Tags:</label>
        <input value={tags} type="text" id="tags" placeholder='e.g. Entertainment, UI, UX, Bug...' onChange={(e)=> setTags(StringToArray(e.target.value) )}/>
        <Button>Save Feedback</Button>
        </div>
      </form>
      </div>
      
    </div>
    
  ))
  
}

export default Modal