import React from "react";
import { Field } from "redux-form";
import styles from "./Input.module.css"


const Input = (props) => {
  return (
    <div className={styles.input}>
        <Field
          className={styles.name}
          component={'input'}
          name={props.fieldName}
          placeholder={'Введите название...'}
        />
        <div className={styles.nameLabel}>{props.name}</div>
    </div>
  )
}

export default Input;