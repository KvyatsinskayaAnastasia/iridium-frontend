import { connect } from "react-redux";
import React from "react";
import AddMagicForm from "./AddMagicForm";
import { addMagic } from "../../../redux/magicListReducer";

const AddMagicFormContainer = (props) => {

  let addMagic = (values) => {
    const newMagic = {
      name: values.magic,
      description: values.magic_description,
      spells: [
        {
          name: values.level_1_spell_1,
          description: values.level_1_spell_1_description,
          level: 1
        },
        {
          name: values.level_1_spell_2,
          description: values.level_1_spell_2_description,
          level: 1
        },
        {
          name: values.level_1_spell_3,
          description: values.level_1_spell_3_description,
          level: 1
        },
        {
          name: values.level_1_spell_4,
          description: values.level_1_spell_4_description,
          level: 1
        },
        {
          name: values.level_1_spell_5,
          description: values.level_1_spell_5_description,
          level: 1
        },
        {
          name: values.level_2_spell_1,
          description: values.level_2_spell_1_description,
          level: 2
        },
        {
          name: values.level_2_spell_2,
          description: values.level_2_spell_2_description,
          level: 2
        },
        {
          name: values.level_2_spell_3,
          description: values.level_2_spell_3_description,
          level: 2
        },
        {
          name: values.level_2_spell_4,
          description: values.level_2_spell_4_description,
          level: 2
        },
        {
          name: values.level_2_spell_5,
          description: values.level_2_spell_5_description,
          level: 2
        },
        {
          name: values.level_3_spell_1,
          description: values.level_3_spell_1_description,
          level: 3
        },
        {
          name: values.level_3_spell_2,
          description: values.level_3_spell_2_description,
          level: 3
        },
        {
          name: values.level_3_spell_3,
          description: values.level_3_spell_3_description,
          level: 3
        },
        {
          name: values.level_3_spell_4,
          description: values.level_3_spell_4_description,
          level: 3
        },
        {
          name: values.level_3_spell_5,
          description: values.level_3_spell_5_description,
          level: 3
        },
        {
          name: values.level_4_spell_1,
          description: values.level_4_spell_1_description,
          level: 4
        },
        {
          name: values.level_4_spell_2,
          description: values.level_4_spell_2_description,
          level: 4
        },
        {
          name: values.level_4_spell_3,
          description: values.level_4_spell_3_description,
          level: 4
        },
        {
          name: values.level_4_spell_4,
          description: values.level_4_spell_4_description,
          level: 4
        },
        {
          name: values.level_4_spell_5,
          description: values.level_4_spell_5_description,
          level: 4
        },
        {
          name: values.level_5_spell_1,
          description: values.level_5_spell_1_description,
          level: 5
        },
        {
          name: values.level_5_spell_2,
          description: values.level_5_spell_2_description,
          level: 5
        },
        {
          name: values.level_5_spell_3,
          description: values.level_5_spell_3_description,
          level: 5
        },
        {
          name: values.level_5_spell_4,
          description: values.level_5_spell_4_description,
          level: 5
        },
        {
          name: values.level_5_spell_5,
          description: values.level_5_spell_5_description,
          level: 5
        }
      ]
    }
    props.addMagic(newMagic);
  }

  return (
    <AddMagicForm {...props}
                  onSubmit={addMagic}
    />
  )
}

export default connect(null, { addMagic })(AddMagicFormContainer);