import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getAbility } from "../../../../redux/abilityItemReducer";
import AbilityItem from "../AbilityItem";

const AbilityItemContainer = (props) => {

  const {id} = useParams();

  useEffect(() => {
    props.getAbility(id);
  }, [id])

  return (
    <AbilityItem {...props}
                 ability={props.ability}
    />
  )
}

let mapStateToProps = (state) => ({
  ability: state.ability
});

export default connect(mapStateToProps, { getAbility })(AbilityItemContainer);