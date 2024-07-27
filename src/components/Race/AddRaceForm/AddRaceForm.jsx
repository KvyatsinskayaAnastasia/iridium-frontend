import React from "react";
import { reduxForm } from "redux-form";
import NameWithDescriptionField from "../../common/NameWithDescriptionInput/NameWithDescriptionField";
import TwoPartAddScreen from "../../common/TwoPartAddScreen/TwoPartAddScreen";

const AddRaceForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <TwoPartAddScreen
        formTitle={"ДОБАВЛЕНИЕ РАСЫ"}
        firstPartTitle={"Раса"}
        firstPartInfo={
          <div>
            <NameWithDescriptionField
              name={`раса`}
              fieldName={`race`}
            />
          </div>
        }
      />
    </form>
  )
}

export default reduxForm({
  form: 'add-race-form'
})(AddRaceForm);