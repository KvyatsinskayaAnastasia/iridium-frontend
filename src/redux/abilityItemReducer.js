import { abilityApi } from "../api/abilityApi";

const SET_ABILITY = 'SET_ABILITY';

let initialState = {
  id: '',
  name: '',
  description: '',
  abilityType: '',
  skills: []
}

const abilityItemReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ABILITY:
      return {
        ...action.ability
      };
    default:
      return state;
  }
}

export const setAbility = (ability) => ({ type: SET_ABILITY, ability });

export const getAbility = (id) => async (dispatch) => {
  let response = await abilityApi.getAbility(id);
  dispatch(setAbility(response));
}

export default abilityItemReducer;