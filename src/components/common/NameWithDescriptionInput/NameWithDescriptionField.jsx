import React from "react";
import { Field } from "redux-form";
import styles from "./NameWithDescriptionField.module.css"


const NameWithDescriptionField = (props) => {
  return (
    <div className={styles.nameWithDescription}>
        <Field
          className={styles.name}
          component={'input'}
          name={props.fieldName}
          placeholder={'Введите название...'}
        />
        <Field
          className={styles.description}
          component={'textarea'}
          name={`${props.fieldName}_description`}
          placeholder={'Введите описание...'}
        />
        <div className={styles.nameLabel}>{props.name}</div>
    </div>
  )
}

export default NameWithDescriptionField;