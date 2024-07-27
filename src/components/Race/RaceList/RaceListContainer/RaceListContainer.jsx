import { connect } from "react-redux";
import React, { useEffect } from "react";
import RaceList from "../RaceList";
import { getAllRaces } from "../../../../redux/raceListReducer";

const RaceListContainer = (props) => {

  useEffect(() => {
    props.getAllRaces();
  }, [])

  return (
    <RaceList {...props}
                 allRaces={props.allRaces}
    />
  )
}

let mapStateToProps = (state) => ({
  allRaces: state.raceList.allRaces
});

export default connect(mapStateToProps, { getAllRaces })(RaceListContainer);