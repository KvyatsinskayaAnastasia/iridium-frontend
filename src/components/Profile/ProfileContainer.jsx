import { connect } from "react-redux";
import Profile from "./Profile";
import { setUserProfile } from "../../redux/profileReducer";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProfileContainer = (props) => {
  const navigate = useNavigate();

  return (
    <Profile {...props}
             profile={props.profile}
             onClick={() => navigate("/character/new")}
    />
  )
}

let mapStateToProps = (state) => ({
  profile: state.profile
});

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);