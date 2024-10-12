import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import RaceItem from "../RaceItem";
import { getRace } from "../../../../redux/raceItemReducer";

const RaceItemContainer = (props) => {

  const {id} = useParams();

  useEffect(() => {
    props.getRace(id);
  }, [id])

  return (
    <RaceItem {...props}
              race={props.race}
    />
  )
}

let mapStateToProps = (state) => ({
  race: state.race
});

export default connect(mapStateToProps, { getRace })(RaceItemContainer);