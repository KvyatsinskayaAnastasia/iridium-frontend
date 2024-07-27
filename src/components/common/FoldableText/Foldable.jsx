import React, { useState } from "react";
import styles from './Foldable.module.css';

const Foldable = (props) => {
  let [opened, isOpened] = useState(false);
  let className = opened ? styles.opened : styles.closed;

  const toggleOpen = () => {
    isOpened(!opened);
  }

  return (
    <div>
      <div className={styles.foldableTitle} onClick={toggleOpen}>{props.title} {opened ? "<" : ">"}</div>
      <div className={`${className} ${styles.foldableContent}`}>
        {props.foldablePart}
      </div>
    </div>
  )
}

export default Foldable;