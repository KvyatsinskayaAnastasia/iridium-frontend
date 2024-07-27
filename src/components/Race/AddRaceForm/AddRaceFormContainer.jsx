import { connect } from "react-redux";
import React from "react";
import AddRaceForm from "./AddRaceForm";
import { addRace } from "../../../redux/raceListReducer";

const AddRaceFormContainer = (props) => {

  let addRace = (values) => {
    const newRace = {
      name: values.race,
      description: values.race_description
    }
    props.addRace(newRace);
  }

  return (
    <AddRaceForm {...props}
                  onSubmit={addRace}
    />
  )
}

export default connect(null, { addRace })(AddRaceFormContainer);