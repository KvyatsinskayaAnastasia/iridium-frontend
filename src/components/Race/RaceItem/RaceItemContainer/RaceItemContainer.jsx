import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import { getRace } from "../../../../redux/raceItemReducer";
import RaceItem from "../RaceItem";

const RaceItemContainer = (props) => {

  const {id} = useParams();

  useEffect(() => {
    props.getRace(id);
  }, [])

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