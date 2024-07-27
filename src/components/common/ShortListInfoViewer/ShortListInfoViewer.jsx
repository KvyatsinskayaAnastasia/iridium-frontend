import React  from "react";
import styles from './ShortListInfoViewer.module.css';

const ShortListInfoViewer = (props) => {
  return (
    <div>
      <div className={styles.shortListViewer}>
        <div>
          <div className={styles.title}><b>{props.listTitle}</b></div>
          {props.listContainer}
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.addButton}
          onClick={props.onClick}
        >
          <b>{props.buttonTitle}</b>
        </button>
      </div>
    </div>
  )
}

export default ShortListInfoViewer;