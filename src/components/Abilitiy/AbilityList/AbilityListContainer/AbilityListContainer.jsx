import { connect } from "react-redux";
import React, { useEffect } from "react";
import AbilityList from "../AbilityList";
import { getAllAbilities } from "../../../../redux/abilityListReducer";

const AbilityListContainer = (props) => {

  useEffect(() => {
    props.getAllAbilities();
  }, [])

  return (
    <AbilityList {...props}
                 getAllAbilities={props.getAllAbilities}
                 allAbilities={props.allAbilities}
    />
  )
}

let mapStateToProps = (state) => ({
  allAbilities: state.abilityList.allAbilities
});

export default connect(mapStateToProps, { getAllAbilities })(AbilityListContainer);