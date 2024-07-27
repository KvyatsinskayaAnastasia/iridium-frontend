import React from "react";
import { Field } from "redux-form";
import styles from "./LeftLabelSelectorField.module.css";

const LeftLabelSelectorField = (props) => {
  return (
    <div className={styles.selectorContainer}>
      <b><label className={styles.selectorLabel}>{props.selectorName}</label></b>
      <Field name={props.fieldName} component="select" className={styles.selector}>
        {props.options.map(option => {
          return <option key={option.value} value={option.value}>{option.name}</option>
        })}
      </Field>
    </div>
  )
}

export default LeftLabelSelectorField;