import { connect } from "react-redux";
import React, { useEffect } from "react";
import AbilityList from "../AbilityList";
import { getAllAbilities } from "../../../../redux/abilityListReducer";
import { useParams } from "react-router";

const AbilityListContainer = (props) => {

  const {type} = useParams();

  useEffect(() => {
    props.getAllAbilities(type.toUpperCase());
  }, [type])

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