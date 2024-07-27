import { connect } from "react-redux";
import React, { useEffect } from "react";
import MagicList from "../MagicList";
import { getAllMagic } from "../../../../redux/magicListReducer";

const MagicListContainer = (props) => {

  useEffect(() => {
    props.getAllMagic();
  }, [])

  return (
    <MagicList {...props}
               getAllMagic={props.getAllMagic}
               allMagic={props.allMagic}
    />
  )
}

let mapStateToProps = (state) => ({
  allMagic: state.magicList.allMagic
});

export default connect(mapStateToProps, { getAllMagic })(MagicListContainer);