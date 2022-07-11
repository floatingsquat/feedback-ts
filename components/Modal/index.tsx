import React, { useState } from 'react'
import Button from '../Button';
import styles from './style.module.scss'

type Modal = {
  toggle: boolean;
  action: ()=> void;
}
function Modal({toggle, action} : Modal) {

  return (
 
    toggle && (
    <div className={styles.modal}>
      <div className={styles.content}>
      <form>
        <div className={styles.header}>
        <h2 className={styles.heading}>Add New Feedback</h2>
        <Button variant="close" onClick={action}>X</Button>
        </div>
        <div className={styles.body}>
          <label htmlFor='title'>Title:</label>
        <input type="text" id="title" placeholder='e.g. Add a comment section'/>
        <label htmlFor='desc'>Description:</label>
        <input type="text" id="desc" placeholder='e.g. A comment field can be added so that users can comment.'/>
        <label htmlFor='tags'>Tags:</label>
        <input type="text" id="tags" placeholder='e.g. Entertainment, UI, UX, Bug...'/>
        <Button>Save Feedback</Button>
        </div>
      </form>
      </div>
      
    </div>
    
  ))
  
}

export default Modal