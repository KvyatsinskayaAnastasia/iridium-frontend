import { magicApi } from "../api/magicApi";

const SET_ALL_MAGIC = 'SET_ALL_MAGIC';

let initialState = {
  allMagic: []
}

const magicListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALL_MAGIC:
      return {
        ...state,
        allMagic: [...action.allMagic]
      };
    default:
      return state;
  }
}

export const setAllMagic = (allMagic) => ({ type: SET_ALL_MAGIC, allMagic });

export const getAllMagic = () => async (dispatch) => {
  let response = await magicApi.getAllMagic();
  dispatch(setAllMagic(response));
}

export const addMagic = (magic) => async () => {
  let response = await magicApi.addMagic(magic);
  window.location.href = `http://localhost:3000/magic/${response}`;
}

export default magicListReducer;