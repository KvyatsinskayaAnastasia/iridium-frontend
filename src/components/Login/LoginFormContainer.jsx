import { connect } from "react-redux";
import React from "react";
import { login } from "../../redux/authorizationReducer";
import LoginForm from "./LoginForm";

const LoginFormContainer = (props) => {
  return (
    <LoginForm {...props}
                  login={props.login}
    />
  )
}

let mapStateToProps = (state) => ({
  user: state.user
});

export default connect(mapStateToProps, { login })(LoginFormContainer);