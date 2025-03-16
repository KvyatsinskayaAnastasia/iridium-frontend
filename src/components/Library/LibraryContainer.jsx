import { connect } from "react-redux";
import React, { useEffect } from "react";
import Library from "./Library";
import { getAllRaces } from "../../redux/raceListReducer";

const LibraryContainer = (props) => {

  useEffect(() => {
    props.getAllRaces();
  }, [])

  return (
    <Library {...props}
             getAllRaces={props.getAllRaces}
             allRaces={props.allRaces}
    />
  )
}

let mapStateToProps = (state) => ({
  allRaces: state.raceList.allRaces
});

export default connect(mapStateToProps, { getAllRaces })(LibraryContainer);