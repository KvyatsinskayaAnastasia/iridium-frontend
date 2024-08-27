import { connect } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router";
import MagicItem from "../MagicItem";
import { getMagic } from "../../../../redux/magicItemReducer";

const MagicItemContainer = (props) => {

  const {id} = useParams();

  useEffect(() => {
    props.getMagic(id);
  }, [id])

  return (
    <MagicItem {...props}
      magic={props.magic}
    />
  )
}

let mapStateToProps = (state) => ({
  magic: state.magic
});

export default connect(mapStateToProps, { getMagic })(MagicItemContainer);