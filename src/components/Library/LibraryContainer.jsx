import { connect } from "react-redux";
import React, { useEffect } from "react";
import { getAllMagic } from "../../redux/magicListReducer";
import Library from "./Library";
import { getAllAbilities } from "../../redux/abilityListReducer";

const LibraryContainer = (props) => {

  useEffect(() => {
    props.getAllMagic();
  }, [])

  useEffect(() => {
    props.getAllAbilities();
  }, [])

  return (
    <Library {...props}
             getAllMagic={props.getAllMagic}
             allMagic={props.allMagic}
             getAllAbilities={props.getAllAbilities}
             allAbilities={props.allAbilities}
    />
  )
}

let mapStateToProps = (state) => ({
  allMagic: state.magicList.allMagic,
  allAbilities: state.abilityList.allAbilities
});

export default connect(mapStateToProps, { getAllMagic, getAllAbilities })(LibraryContainer);