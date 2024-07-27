import { connect } from "react-redux";
import React from "react";
import { useNavigate } from "react-router-dom";
import Ability from "./Ability";

const AbilityContainer = (props) => {

  const navigate = useNavigate();

  return (
    <Ability {...props}
           onClick={() => navigate("/ability/new")}
    />
  )
}

export default connect(null, null)(AbilityContainer);