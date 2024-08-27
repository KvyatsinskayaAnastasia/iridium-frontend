import { authorizationApi } from "../api/authorizationApi";

const SET_USER = 'SET_USER';

let initialState = {
  id: '',
  username: '',
  roles: []
}


const authorizationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...action.user
      };
    default:
      return state;
  }
}

export const setUser = (user) => ({ type: SET_USER, user });

export const login = (user) => async () => {
  let response = await authorizationApi.login(user);
  if (!!response) {
    sessionStorage.setItem("token", response.token);
    window.location.href = 'http://localhost:3000/library';
  }
}

export const getCurrentUser = () => async (dispatch) => {
  let response = await authorizationApi.user();
  dispatch(setUser(response));
}

export default authorizationReducer;