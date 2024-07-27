import { raceApi } from "../api/raceApi";

const SET_ALL_RACE = 'SET_ALL_RACE';

let initialState = {
  allRaces: []
}

const raceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_RACE:
      return {
        ...state,
        allRaces: [...action.allRaces]
      };
    default:
      return state;
  }
}

export const setAllRaces = (allRaces) => ({ type: SET_ALL_RACE, allRaces });

export const getAllRaces = () => async (dispatch) => {
  let response = await raceApi.getAllRaces();
  dispatch(setAllRaces(response));
}

export const addRace = (race) => async () => {
  let response = await raceApi.addRace(race);
  window.location.href = `http://localhost:3000/race/${response}`;
}

export default raceListReducer;