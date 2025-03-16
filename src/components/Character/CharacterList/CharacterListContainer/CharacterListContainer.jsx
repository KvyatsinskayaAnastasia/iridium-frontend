import { connect } from "react-redux";
import React, { useEffect } from "react";
import CharacterList from "../CharacterList";
import { getAllCharacters } from "../../../../redux/characterListReducer";

const CharacterListContainer = (props) => {

  useEffect(() => {
    props.getAllCharacters();
  }, [])

  return (
    <CharacterList {...props}
                   getAllCharacters={props.getAllCharacters}
                   allCharacters={props.allCharacters}
    />
  )
}

let mapStateToProps = (state) => ({
  allCharacters: state.characterList.allCharacters
});

export default connect(mapStateToProps, { getAllCharacters })(CharacterListContainer);