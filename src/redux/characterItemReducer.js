import { characterApi } from "../api/characterApi";

const SET_CHARACTER = 'SET_CHARACTER';

let initialState = {
  id: '',
  name: '',
  age: 0,
  raceId: '',
  gender: '',
  appearance: '',
  spells: [],
  abilities: [],
  temper: '',
  biography: '',
  aim: '',
  nationality: '',
  image: '',
  characterType: '',
  userId: ''
}

const characterItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CHARACTER:
      return {
        ...action.character
      };
    default:
      return state;
  }
}

export const setCharacter = (character) => ({ type: SET_CHARACTER, character });

export const getCharacter = (id) => async (dispatch) => {
  let response = await characterApi.getCharacter(id);
  dispatch(setCharacter(response));
}

export const generateCharacter = (settings) => async (dispatch) => {
  let response = await characterApi.generateCharacter(settings);
  dispatch(setCharacter(response));
}

export default characterItemReducer;