import React from "react";
import { Field } from "redux-form";
import styles from "./SeparateRowsInputField.module.css";

const SeparateRowsInputField = (props) => {

  return (
    <div className={styles.inputContainer}>
      <b><label className={styles.inputLabel}>{props.selectorName}</label></b>
      <Field
        className={styles.input}
        component={props.component}
        name={props.fieldName}
        placeholder={props.placeholder}
      />
    </div>
  )
}

export default SeparateRowsInputField;