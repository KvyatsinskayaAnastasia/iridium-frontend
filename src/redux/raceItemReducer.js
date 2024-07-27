import { raceApi } from "../api/raceApi";

const SET_ABILITY = 'SET_ABILITY';

let initialState = {
  id: '',
  name: '',
  description: '',
  raceType: '',
  skills: []
}

const raceItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ABILITY:
      return {
        ...action.race
      };
    default:
      return state;
  }
}

export const setRace = (race) => ({ type: SET_ABILITY, race });

export const getRace = (id) => async (dispatch) => {
  let response = await raceApi.getRace(id);
  dispatch(setRace(response));
}

export default raceItemReducer;