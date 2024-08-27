import { connect } from "react-redux";
import React, { useEffect } from "react";
import Profile from "./Profile";
import { getCurrentUser } from "../../redux/authorizationReducer";

const ProfileContainer = (props) => {

  useEffect(() => {
    props.getCurrentUser();
  }, [])

  return (
    <Profile {...props}
             currentUser={props.currentUser}
    />
  )
}

let mapStateToProps = (state) => ({
  currentUser: state.currentUser
});

export default connect(mapStateToProps, { getCurrentUser })(ProfileContainer);