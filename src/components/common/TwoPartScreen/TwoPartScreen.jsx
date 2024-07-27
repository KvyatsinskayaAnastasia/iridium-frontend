import React from "react";
import styles from './TwoPartScreen.module.css';

const TwoPartScreen = (props) => {
  return (
    <div className={styles.mainContext}>
      <div lang="ru">
        <div className={styles.firstPartContext}>
          <div className={styles.title}>
          <b>{props.firstPartTitle && props.firstPartTitle.toUpperCase() || ""}</b>
        </div>
        {props.firstPartInfo}
        </div>
      </div>
      <div lang="ru" className={styles.secondPartContext}>
        <div className={styles.title}>
          <b>{props.secondPartTitle && props.secondPartTitle.toUpperCase() || ""}</b>
        </div>
        {props.secondPartInfo}
      </div>
    </div>

  )
}

export default TwoPartScreen;