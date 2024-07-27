import { magicApi } from "../api/magicApi";

const SET_MAGIC = 'SET_MAGIC';

let initialState = {
  id: '',
  name: '',
  description: '',
  leveledSpells: []
}

const magicListReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MAGIC:
      return {
        ...action.magic
      };
    default:
      return state;
  }
}

export const setMagic = (magic) => ({ type: SET_MAGIC, magic });

export const getMagic = (id) => async (dispatch) => {
  let response = await magicApi.getMagic(id);
  dispatch(setMagic(response));
}

export default magicListReducer;