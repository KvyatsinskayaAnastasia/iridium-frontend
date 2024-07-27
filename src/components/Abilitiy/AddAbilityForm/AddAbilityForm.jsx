import React from "react";
import { reduxForm } from "redux-form";
import SkillFields from "./SkillField/SkillFields";
import OnePartAddScreen from "../../common/OnePartAddScreen/OnePartAddScreen";
import styles from "./AddAbilityForm.module.css";
import SeparateRowsInputField from "../../common/SeparateRowsInputField/SeparateRowsInputField";
import SeparateRowsSelectorField from "../../common/SeparateRowsSelectorField/SeparateRowsSelectorField";

const AddAbilityForm = (props) => {

  const options = [
    {
      value: "BASIC",
      name: "Основная"
    },
    {
      value: "GENERAL",
      name: "Общая"
    },
    {
      value: "FIGHTING",
      name: "Боевая"
    }
  ];

  return (
    <form onSubmit={props.handleSubmit}>
      <OnePartAddScreen
        formTitle={"ДОБАВИТЬ СПОСОБНОСТЬ"}
        firstPartInfo={
          <div>
            <div className={styles.inlineInputs}>
              <SeparateRowsSelectorField
                options={options}
                fieldName={"ability_type"}
                selectorName={"Тип"}/>
              <SeparateRowsInputField
                fieldName={"ability"}
                component={'input'}
                selectorName={"Название"}
                placeholder={'Введите название...'}/>
            </div>
            <SeparateRowsInputField
              fieldName={"ability_description"}
              component={'textarea'}
              selectorName={"Описание"}
              placeholder={'Введите описание...'}/>
            <b><div className={styles.abilities}>Умения</div></b>
            <SkillFields/>
          </div>
        }
      />
    </form>
  )
}

export default reduxForm({
  form: 'add-ability-form'
})(AddAbilityForm);