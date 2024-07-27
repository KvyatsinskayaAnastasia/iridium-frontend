import { abilityApi } from "../api/abilityApi";

const SET_ALL_ABILITY = 'SET_ALL_ABILITY';

let initialState = {
  allAbilities: []
}

const abilityListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_ABILITY:
      return {
        ...state,
        allAbilities: [...action.allAbilities]
      };
    default:
      return state;
  }
}

export const setAllAbilities = (allAbilities) => ({ type: SET_ALL_ABILITY, allAbilities });

export const getAllAbilities = () => async (dispatch) => {
  let response = await abilityApi.getAllAbilities();
  dispatch(setAllAbilities(response));
}

export const addAbility = (ability) => async () => {
  let response = await abilityApi.addAbility(ability);
  window.location.href = `http://localhost:3000/ability/${response}`;
}

export default abilityListReducer;