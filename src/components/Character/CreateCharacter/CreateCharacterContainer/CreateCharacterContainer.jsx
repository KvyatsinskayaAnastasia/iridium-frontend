import { connect } from "react-redux";
import React, { useEffect } from "react";
import CreateCharacter from "../CreateCharacter";
import { getAllRaces } from "../../../../redux/raceListReducer";
import { getAllMagic } from "../../../../redux/magicListReducer";
import { getAllAbilities } from "../../../../redux/abilityListReducer";
import { generateCharacter } from "../../../../redux/characterItemReducer";
import { addCharacter } from "../../../../redux/characterListReducer";
import {upload} from "../../../../redux/attachmentReducer";

const CreateCharacterContainer = (props) => {

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
    <CreateCharacter {...props}
                     getAllMagic={props.getAllMagic}
                     allMagic={props.allMagic}
                     getAllAbilities={props.getAllAbilities}
                     allAbilities={props.allAbilities}
                     getAllRaces={props.getAllRaces}
                     allRaces={props.allRaces}
                     addCharacter={props.addCharacter}
                     generateCharacter={props.generateCharacter}
                     character={props.character}
                     upload={props.upload}
    />
  )
}

let mapStateToProps = (state) => ({
  allMagic: state.magicList.allMagic,
  allAbilities: state.abilityList.allAbilities,
  allRaces: state.raceList.allRaces,
  character: state.character,
  attachment: state.attachment
});


export default connect(mapStateToProps, { getAllMagic, getAllAbilities, getAllRaces, addCharacter, generateCharacter, upload })(CreateCharacterContainer);