import { connect } from "react-redux";
import React from "react";
import Magic from "./Magic";
import { useNavigate } from "react-router-dom";

const MagicContainer = (props) => {

  const navigate = useNavigate();

  return (
    <Magic {...props}
           onClick={() => navigate("/magic/new")}
    />
  )
}

export default connect(null, null)(MagicContainer);