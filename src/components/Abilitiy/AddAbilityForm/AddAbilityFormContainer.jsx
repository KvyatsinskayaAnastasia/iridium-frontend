import { connect } from "react-redux";
import React from "react";
import AddAbilityForm from "./AddAbilityForm";
import { addAbility } from "../../../redux/abilityListReducer";

const AddAbilityFormContainer = (props) => {

  let addAbility = (values) => {
    const newAbility = {
      name: values.ability,
      description: values.ability_description,
      abilityType: values.ability_type,
      skills: [...values.skills]
    }
    props.addAbility(newAbility);
  }

  return (
    <AddAbilityForm {...props}
                  onSubmit={addAbility}
    />
  )
}

export default connect(null, { addAbility })(AddAbilityFormContainer);