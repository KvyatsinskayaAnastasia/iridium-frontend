import { connect } from "react-redux";
import React, { useEffect } from "react";
import { getAllMagic } from "../../redux/magicListReducer";
import Library from "./Library";
import { getAllAbilities } from "../../redux/abilityListReducer";
import { getAllRaces } from "../../redux/raceListReducer";

const LibraryContainer = (props) => {

  useEffect(() => {
    props.getAllMagic();
  }, [])

  useEffect(() => {
    props.getAllAbilities();
  }, [])

  useEffect(() => {
    props.getAllRaces();
  }, [])

  return (
    <Library {...props}
             getAllMagic={props.getAllMagic}
             allMagic={props.allMagic}
             getAllAbilities={props.getAllAbilities}
             allAbilities={props.allAbilities}
             getAllRaces={props.getAllRaces}
             allRaces={props.allRaces}
    />
  )
}

let mapStateToProps = (state) => ({
  allMagic: state.magicList.allMagic,
  allAbilities: state.abilityList.allAbilities,
  allRaces: state.raceList.allRaces
});

export default connect(mapStateToProps, { getAllMagic, getAllAbilities, getAllRaces })(LibraryContainer);