import { connect } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";
import Race from "./Race";

const RaceContainer = (props) => {

  const navigate = useNavigate();

  return (
    <Race {...props}
          onClick={() => navigate("/race/new")}
    />
  )
}

export default connect(null, null)(RaceContainer);