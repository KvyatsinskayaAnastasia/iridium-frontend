import { characterApi } from "../api/characterApi";

const SET_ALL_CHARACTER = 'SET_ALL_CHARACTER';

let initialState = {
  allCharacters: []
}

const characterListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_CHARACTER:
      return {
        ...state,
        allCharacters: [...action.allCharacters]
      };
    default:
      return state;
  }
}

export const setAllCharacters = (allCharacters) => ({ type: SET_ALL_CHARACTER, allCharacters });

export const getAllCharacters = (type) => async (dispatch) => {
  let response = await characterApi.getAllCharacters(type);
  dispatch(setAllCharacters(response));
}

export const addCharacter = (character) => async () => {
  let response = await characterApi.addCharacter(character);
  // window.location.href = `http://localhost:3000/character/${response}`;
}

export default characterListReducer;