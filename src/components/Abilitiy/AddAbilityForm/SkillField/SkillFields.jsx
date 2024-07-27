import React from "react";
import { Field, FieldArray } from "redux-form";
import styles from "./SkillFields.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const SkillFields = () => {

  const renderSkills = ({ fields }) => (
    <div className={styles.skills}>
      {fields.map((member, index) =>
        <div className={styles.skillsForm} key={index}>
          <div className={styles.minLevelPart}>
            <div className={styles.minLevelLabel}>уровень</div>
            <Field
              className={styles.minLevelField}
              name={`${member}.minLevel`}
              type="number"
              component={'input'}/>
          </div>
          <div className={styles.skillPart}>
            <div className={styles.skillLabel}>описание</div>
            <Field
              className={styles.skillField}
              name={`${member}.description`}
              type="text"
              component={'input'}/>
          </div>
          <div className={styles.skillButtonContainer}>
            <button
              className={styles.skillButton}
              type="button"
              onClick={() => fields.remove(index)}
            >
              <FontAwesomeIcon icon={faTrash}/>
            </button>
          </div>
        </div>
      )}
      <div>
        <button className={styles.skillButton} type="button" onClick={() => fields.push({})}><b>Добавить Умение</b></button>
      </div>
    </div>
  )

  return (
    <div>
      <FieldArray name="skills" component={renderSkills}/>
    </div>
  )
}

export default SkillFields;