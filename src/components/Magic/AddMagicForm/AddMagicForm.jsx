import React from "react";
import { reduxForm } from "redux-form";
import NameWithDescriptionField from "../../common/NameWithDescriptionInput/NameWithDescriptionField";
import AddLeveledSpellsForm from "./AddLeveledSpellsForm/AddLeveledSpellsForm";
import TwoPartAddScreen from "../../common/TwoPartAddScreen/TwoPartAddScreen";

const AddMagicForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <TwoPartAddScreen
        formTitle={"ДОБАВЛЕНИЕ МАГИИ"}
        firstPartTitle={"Магия"}
        secondPartTitle={"Заклинания"}
        firstPartInfo={
          <div>
            <NameWithDescriptionField
              name={`магия`}
              fieldName={`magic`}
            />
          </div>
        }
        secondPartInfo={
          <div>
            <AddLeveledSpellsForm
              title={'Круг 1'}
              name={'заклинание'}
              fieldName={'level_1_spell'}
              count={5}
            />
            <AddLeveledSpellsForm
              title={'Круг 2'}
              name={'заклинание'}
              fieldName={'level_2_spell'}
              count={5}
            />
            <AddLeveledSpellsForm
              title={'Круг 3'}
              name={'заклинание'}
              fieldName={'level_3_spell'}
              count={5}
            />
            <AddLeveledSpellsForm
              title={'Круг 4'}
              name={'заклинание'}
              fieldName={'level_4_spell'}
              count={5}
            />
            <AddLeveledSpellsForm
              title={'Круг 5'}
              name={'заклинание'}
              fieldName={'level_5_spell'}
              count={5}
            />
          </div>
        }
      />
    </form>
  )
}

export default reduxForm({
  form: 'add-magic-form'
})(AddMagicForm);