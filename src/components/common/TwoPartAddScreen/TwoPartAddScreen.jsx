import React from "react";
import styles from './TwoPartAddScreen.module.css';

const TwoPartAddScreen = (props) => {
  return (
    <div>
      <div className={styles.formTitle}><b>{props.formTitle && props.formTitle.toUpperCase() || ""}</b></div>
      <div className={styles.mainContext}>
        <div lang="ru">
          <div className={styles.firstPartContext}>
            <div className={styles.title}>
              <b>{props.firstPartTitle && props.firstPartTitle.toUpperCase() || ""}</b>
            </div>
            {props.firstPartInfo}
          </div>
          <div className={styles.buttonContainer}>
            <button
              className={styles.saveButton}
            >
              <b>Сохранить</b>
            </button>
          </div>
        </div>
        <div lang="ru" className={styles.secondPartContext}>
          <div className={styles.title}>
            <b>{props.secondPartTitle && props.secondPartTitle.toUpperCase() || ""}</b>
          </div>
          {props.secondPartInfo}
        </div>
      </div>
    </div>
  )
}

export default TwoPartAddScreen;