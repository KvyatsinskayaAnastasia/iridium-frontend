import React from "react";
import { Field } from "redux-form";
import styles from "./SeparateRowsSelectorField.module.css";

const SeparateRowsSelectorField = (props) => {
  return (
    <div className={styles.selectorContainer}>
      <b><label className={styles.selectorLabel}>{props.selectorName}</label></b>
      <Field name={props.fieldName} component="select" className={styles.selector} onChange={props.onChange}>
        <option key={"default"} value={null}>Новое значение</option>
        {props.options.map(option => {
          return <option key={option.value.id} value={option.value.id}>{option.name}</option>
        })}
      </Field>
    </div>
  )
}

export default SeparateRowsSelectorField;