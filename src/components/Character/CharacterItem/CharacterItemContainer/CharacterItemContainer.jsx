import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import CharacterItem from "../CharacterItem";
import { getCharacter } from "../../../../redux/characterItemReducer";

const CharacterItemContainer = (props) => {

  const {id} = useParams();

  useEffect(() => {
    props.getCharacter(id);
  }, [id])

  return (
    <CharacterItem {...props}
                   character={props.character}
    />
  )
}

let mapStateToProps = (state) => ({
  character: state.character
});

export default connect(mapStateToProps, { getCharacter })(CharacterItemContainer);