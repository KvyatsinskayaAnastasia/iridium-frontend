import React from "react";
import styles from './OnePartAddScreen.module.css';

const OnePartAddScreen = (props) => {
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
      </div>
    </div>
  )
}

export default OnePartAddScreen;