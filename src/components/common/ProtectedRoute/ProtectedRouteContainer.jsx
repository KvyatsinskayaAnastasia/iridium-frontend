import { connect } from "react-redux";
import React from "react";
import ProtectedRoute from "./ProtectedRoute";

const ProtectedRouteContainer = (props) => {
  return (
    <ProtectedRoute {...props}
               user={props.user}
    />
  )
}

let mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, null)(ProtectedRouteContainer);